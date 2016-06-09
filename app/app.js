'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.user',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode({enable:true,requireBase:true}).hashPrefix('!');
  console.log($locationProvider)
  // $routeProvider.otherwise({redirectTo: '/view1'});
}]).
run(['$location','$rootScope', function($location,$rootScope){
    $rootScope.$on('$locationChangeStart', function(){
      console.log($location.path())
    })
}]);
