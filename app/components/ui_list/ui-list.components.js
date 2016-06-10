angular.
  module('myApp').
  component('uiList', {
    templateUrl: 'components/ui_list/ui-list.components.html',
    controllerAs: 'UIListCtrl',
    controller: UiListController
  });

  function UiListController() {
    this.persons = [
      {
        name: 'Nexus S',
        desc: 'Fast just got faster with Nexus S.'
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        desc: 'The Next, Next Generation tablet.'
      }, {
        name: 'MOTOROLA XOOM™',
        desc: 'The Next, Next Generation tablet.'
      }
    ];
  }