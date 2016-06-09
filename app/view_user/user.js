'use strict';

angular.module('myApp.user', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user', {
    templateUrl: 'view_user/user.html',
    controller: 'UserCtrl'
  });
}])

.controller('UserCtrl', ['$scope','UserService','UserFactory', function($scope, UserService, UserFactory) {

	var a = UserFactory.setUser('Wan','Admin For Factory')
	var a2 = UserFactory.getUser()
	console.log(a2)
	var b = UserFactory.setUser('Wan2','Admin For Factory2')
	var b2 = UserFactory.getUser()
	console.log(b2)

	var c = UserService.setUser('Wan','Admin For Service')
	var c2 = UserService.getUser()
	console.log(c2)
	var d = UserService.setUser('Wan2','Admin For Service2')
	var d2 = UserService.getUser()
	console.log(d2)



}]);