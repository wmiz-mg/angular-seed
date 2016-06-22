angular.module('myApp.loginModal',['ui.bootstrap'])
.run(
  ['$templateCache', function($templateCache){
    $templateCache.put("uib/template/modal/window.html",
    "<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n" +
    "    uib-modal-animation-class=\"fade\"\n" +
    "    modal-in-class=\"in\"\n" +
    "    ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\">\n" +
    "    <div uib-modal-transclude class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"></div>\n" +
    "</div>\n" +
    "");
  }
])
.service('loginModal', ['$uibModal', function ($uibModal) {

  var modalDefaults = {
    animation: true, 
    backdrop: true, 
    keyboard: false,
    backdropClass : 'login-bg',
    templateUrl: '/components/modal/modal.template.html'
  };

  var modalOptions = {
    loginButton: 'Sign In'
  };

  var _$uibModalInstance

  this.showModal = function (customModalDefaults, customModalOptions) {
    if (!customModalDefaults) customModalDefaults = {};
    customModalDefaults.backdrop = 'static';
    return this.show(customModalDefaults, customModalOptions);
  };

  this.close = function(){
    if(_$uibModalInstance){
      _$uibModalInstance.dismiss()
      _$uibModalInstance = null
    }
  }

  this.show = function (customModalDefaults, customModalOptions) {
    //Create temp objects to work with since we're in a singleton service
    var tempModalDefaults = {};
    var tempModalOptions = {};

    //Map angular-ui modal custom defaults to modal defaults defined in service
    angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

    //Map modal.html $scope custom properties to defaults defined in service
    angular.extend(tempModalOptions, modalOptions, customModalOptions);

    if (!tempModalDefaults.controller) {
      tempModalDefaults.controller = ('modalController', ['$scope','$uibModalInstance','UserService', function ($scope, $uibModalInstance,UserService) {
        $scope.modalOptions = tempModalOptions;
        _$uibModalInstance = $uibModalInstance;
        $scope.modalOptions.ok = function () {
          UserService.login($scope.modalOptions.username,$scope.modalOptions.password)
          if(UserService.isAuthenticated()){
            $uibModalInstance.close(true);
          }else{
            console.log('not authenticated!');
          }
        };
        $scope.modalOptions.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };

      }])
    }

    return $uibModal.open(tempModalDefaults).result;
  };
}]);