'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
  $routeProvider.when('/view6', {
    templateUrl: 'view4/view4.html',
    controller: 'View6Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope',function($scope) {
	console.log($scope)
	console.log($scope.test = 4444)
	console.log($scope.test2 = 44441111)
}]);

angular.module('myApp').controller('View6Ctrl', ['$scope',function($scope) {
	console.log($scope)
	console.log($scope.test = 66666)
	console.log($scope.test2 = 6666611111)
	console.log($scope.$parent.test = 'override')
	console.log($scope.$parent.test2 = 'override')
}]);