angular.
  module('myApp').
  component('navigation', {
    templateUrl: 'components/nav/nav.template.html',
    controllerAs: 'NavCtrl',
    controller: ['UserService','$scope', function (UserService,$scope) {
      $scope.logout = function () {
        console.log(UserService)
        UserService.logout();
      }
    }]
  });