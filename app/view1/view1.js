'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$rootScope', function($scope,$rootScope) {
	console.log($scope)
    console.log($scope.test = 1111111)
    console.log('ctrl 1')
}]);