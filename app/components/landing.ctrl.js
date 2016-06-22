'use strict';

angular.module('myApp').controller('LandingCtrl', ['$scope','loginModal', function($scope,loginModal) {
	loginModal.showModal().then(function (result){
		$scope.user = result
	});
}])