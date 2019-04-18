(function () {
  'use strict'

  angular.module('app')
    .component('success', {
      controller: successCtrl,
      templateUrl: 'app/components/success/success.template.html'
    })

  successCtrl.$inject = ['rgService']

  function successCtrl(rgService) {
    const vm = this;
    vm.$onInit = onInit;
    vm.Clicker = Clicker;
    vm.home = home;

    function onInit() {
      console.log("success component")
      // rgService.$test();
    }

    function Clicker() {
      console.log("YOU GOT CLICKED");
      rgService.$test();
    }

    function home() {
      rgService.$home();
    }
  } // END mainController
}());