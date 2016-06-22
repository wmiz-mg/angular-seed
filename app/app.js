'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.router','myApp.loginModal'])
.config(['$locationProvider','$stateProvider', '$urlRouterProvider', function ($locationProvider ,$stateProvider,   $urlRouterProvider) {
	$locationProvider.html5Mode({enable:true,requireBase:true}).hashPrefix('!');
	$urlRouterProvider
    .otherwise('/');

  	$stateProvider
        .state("landing", {
        	url: '/',
        	views: {
		      'content': {
		        templateUrl: '/components/landing.html',
		        controller: 'LandingCtrl'
		      }
		    }
        })
        .state("dashboard", {
        	url: '/dashboard',
        	views: {
		      'content': {
		        templateUrl: '/components/body.html',
		        controller: function($scope){}
		      }
		    }
        })
        .state("user", {
        	url: '/user-list',
        	views: {
		      'content': {
		        templateUrl: '/components/ui_list/userlist.html',
		        controller: function($scope){}
		      }
		    }
        })
  }
])
.run(['$location','$rootScope', function($location,$rootScope){
    $rootScope.$on('$locationChangeStart', function(){
      console.log($location.path())
    })

}]);
