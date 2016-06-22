'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router','myApp.loginModal','myApp.user-service'])
.config(['$locationProvider','$stateProvider', '$urlRouterProvider', function ($locationProvider ,$stateProvider,   $urlRouterProvider) {
	$locationProvider.html5Mode({enable:true,requireBase:true}).hashPrefix('!');
    $urlRouterProvider.otherwise("/welcome");
  	$stateProvider
        .state("welcome", {
            url: '/welcome',
            data: {'requireAccess': false},
            views: {
              'content': {
                templateUrl: '/components/landing.html'
              }
            }
        })
        .state("login", {
        	url: '/login',
            data: {'requireAccess': false},
        	views: {
		      'content': {
		        controller: ['loginModal','$state', function (loginModal,$state) {
                    loginModal.showModal().then(function(result){
                        if(result){
                            $state.go('dashboard.user')
                        }
                    });
                }]
		      }
		    }
        })
        .state("dashboard", {
            abstract: true,
            data: {'requireAccess': true},
            views: {
              'content': {
                templateUrl: '/components/dashboard/dashboard.html'
              }
            }
        })
        .state("dashboard.user", {
        	url: '/user-list',
        	views: {
		      'abs-dashboard': {
		        templateUrl: '/components/ui_list/userlist.html',
		        controller: function($scope){}
		      }
		    }
        })
  }
])
.run(['$location','$rootScope','$state','UserService', function($location,$rootScope,$state,UserService){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        if (toState.data && toState.data.requireAccess === true) {
            var _auth = UserService.isAuthenticated()
            if(_auth){
                //proceed
            }else{
                event.preventDefault();
                $state.go('login')
            }
        }
        console.log(toState.data.requireAccess)
        console.log($location.path())
    })

}]);
