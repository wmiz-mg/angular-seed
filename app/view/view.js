'use strict';

angular.module('myApp.view', ['ui.router','myApp.version'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state("dashboard.view", {
        url: '/view',
        views: {
            'abs-dashboard': {
                templateUrl: '/view/view.html',
            }
        }
    })
}])

.controller('View2Ctrl', ['$scope', function($scope) {		
    console.log('test')
}]);