(function () {
  'use strict'

  angular.module('app')
    .component('nav', {
      controller: navCtrl,
      // templateUrl: 'app/components/nav/nav.template.html', // NAV BAR TEMPLATE
    })

  navCtrl.$inject = ['rgService']

  function navCtrl(rgService) {

    const vm = this;
    vm.$onInit = onInit;
    vm.Clicker = Clicker;

    function onInit() {
      console.log("nav component");
    }

    function Clicker() {
      console.log("YOU GOT CLICKED");
      rgService.$test();

    }
  } // END mainController
}());