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
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,   $urlRouterProvider) {
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
        .state("home2", {
        	url: '/home',
        	views: {
		      'content': {
		        templateUrl: '/components/body2.html',
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
