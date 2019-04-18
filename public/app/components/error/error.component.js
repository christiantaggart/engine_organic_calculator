(function () {
  'use strict'

  angular.module('app')
    .component('error', {
      controller: errorCtrl,
      templateUrl: 'app/components/error/error.template.html'
    })

  errorCtrl.$inject = ['rgService']

  function errorCtrl(rgService) {
    const vm = this;
    vm.$onInit = onInit;
    vm.Clicker = Clicker;
    vm.home = home;
    
    function onInit() {
      console.log("error component")
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