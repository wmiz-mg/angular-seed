'use strict';

angular.module('myApp').controller('LandingCtrl', ['$scope','loginModal', function($scope,loginModal) {
	console.log('controller')
	loginModal.showModal().then(function (result){
		$scope.user = result
	});
}])