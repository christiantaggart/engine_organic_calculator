(function () {
    'use strict'

    angular.module('app')
        .component('rgUploader', {
            controller: rgUploaderCtrl,
            templateUrl: 'app/components/rgUploader/rgUploader.template.html'
        })

    rgUploaderCtrl.$inject = ['rgService']

    function rgUploaderCtrl(rgService) {
        const vm = this;
        vm.$onInit = onInit;
        vm.Clicker = Clicker;

        function onInit() {
            console.error("rg-uploader comp")
            // rgService.$test();
        }

        function Clicker() {
            console.log("YOU GOT CLICKED");
            rgService.$test();
        }
    } // END mainController
}());