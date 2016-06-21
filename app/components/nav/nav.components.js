angular.
  module('myApp').
  component('navigation', {
    templateUrl: 'components/nav/nav.template.html',
    controllerAs: 'NavCtrl',
    controller: NavController
  });

  function NavController() {
    console.log('nav ctrl')
    // this.persons = [
    //   {
    //     name: 'Nexus S',
    //     desc: 'Fast just got faster with Nexus S.'
    //   }, {
    //     name: 'Motorola XOOM™ with Wi-Fi',
    //     desc: 'The Next, Next Generation tablet.'
    //   }, {
    //     name: 'MOTOROLA XOOM™',
    //     desc: 'The Next, Next Generation tablet.'
    //   }
    // ];
  }