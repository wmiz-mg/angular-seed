'use strict';

// Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.user',
//   'myApp.version'
// ]).
angular.module('myApp', ['ui.router'])
.config(['$locationProvider','$stateProvider', '$urlRouterProvider', function ($locationProvider ,$stateProvider,   $urlRouterProvider) {
	$locationProvider.html5Mode({enable:true,requireBase:true}).hashPrefix('!');
	$urlRouterProvider
    .otherwise('/');

  	$stateProvider
        .state("home", {
        	url: '/',
        	views: {
		      'content': {
		        templateUrl: '/components/body.html',
		        controller: function($scope){}
		      }
		    }
        })
        .state("dashboard", {
        	url: '/dashboard',
        	views: {
		      'content': {
		        templateUrl: '/components/body2.html',
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
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.html5Mode({enable:true,requireBase:true}).hashPrefix('!');
//   console.log($locationProvider)
//   // $routeProvider.otherwise({redirectTo: '/view1'});
// }]).
.run(['$location','$rootScope', function($location,$rootScope){
    $rootScope.$on('$locationChangeStart', function(){
      console.log($location.path())
    })
}]);
