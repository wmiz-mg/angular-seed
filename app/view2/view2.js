'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','UserService','UserFactory', function($scope, UserService, UserFactory) {		
	var a2 = UserFactory.getUser()
	console.log(a2)
	UserFactory.setUser('New User','New Role')
	var a3 = UserFactory.getUser()
	console.log(a3)
	console.log(UserFactory)

	var c2 = UserService.getUser()
	console.log(c2)
	console.log(UserService)
}]);