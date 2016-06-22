'use strict';
angular.
  module('myApp').
  component('navigation', {
    templateUrl: 'components/nav/nav.template.html',
    controllerAs: 'NavCtrl',
    controller: NavigationCtrl
  });

  function NavigationCtrl ($rootScope,$scope) {
    this.logout = function () {
      $rootScope.logout();
    }
  }
