'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.when('/view5', {
    templateUrl: 'view4/view4.html',
    controller: 'View5Ctrl'
  });
  // $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode({enable:true,requireBase:true}).hashPrefix('!');
  console.log($locationProvider)
  // $routeProvider.otherwise({redirectTo: '/view1'});
}]).
controller('View5Ctrl', ['$scope','$rootScope', function($scope,$rootScope) {
    console.log($scope)
    console.log($scope.test = 222222)
    console.log($scope.test2 = 22222211111)
    console.log('ctrl 5')
}]).
run(['$location', function($location){
    console.log($location)
    console.log($location.path())
}]);
