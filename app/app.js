'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router','myApp.loginModal','myApp.user-service'])
.config(['$locationProvider','$stateProvider', '$urlRouterProvider', function ($locationProvider ,$stateProvider,   $urlRouterProvider) {
    $locationProvider.html5Mode({enable:true,requireBase:true}).hashPrefix('!');
    $urlRouterProvider.when('','/welcome');
    // $urlRouterProvider.otherwise('/welcome');
    
    $stateProvider
    .state("welcome", {
        url: '/welcome',
        data: {'requireAccess': false},
        onEnter: function(loginModal) {
            loginModal.close();
        },
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
                controller: function (loginModal,UserService,$state) {
                    console.log('User Log In: '+ UserService.isAuthenticated());
                    if(!UserService.isAuthenticated()){
                        loginModal.showModal().then(function(result){
                            if(result){
                                $state.go('dashboard.user');
                            }
                        });
                    }else{
                        $state.go('dashboard.user');
                    }
                }
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
                templateUrl: '/components/ui_list/userlist.html'
            }
        }
    })
}
])
.run(['$location','$rootScope','$state','UserService','$urlRouter',
    function($location, $rootScope, $state, UserService, $urlRouter){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        if (toState.data && toState.data.requireAccess === true) {
            var _auth = UserService.isAuthenticated();
            if(!_auth){
                event.preventDefault();
                $state.go('login');
            }
        }
    })

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        // console.log(toState)
        // console.log(fromState)
        // console.log($location.path())
    });

    $rootScope.$on('$locationChangeSuccess', function(event, newUrl, oldUrl, newState, oldState) {
        // console.log(event)
        // console.log('new url: '+newUrl)
        // console.log('old url: '+oldUrl)
        // console.log('new state: '+newState)
        // console.log('old state: '+oldState)
    });

    $rootScope.logout = function() {
        UserService.logout();
        $location.path('/welcome');
    }

}])
