(function () {
    'use strict'

    angular.module('app')
        .component('rgMultiUploader', {
            controller: rgMultiUploaderCtrl,
            templateUrl: 'app/components/rgMultiUploader/rgMultiUploader.template.html'
        })

        .directive("filesInput", function () {
            return {
                require: "ngModel",
                link: function postLink(scope, elem, attrs, ngModel) {
                    elem.on("change", function (e) {
                        var files = elem[0].files;
                        ngModel.$setViewValue(files);
                    })
                }
            }
        })


    // Angular Controller
    rgMultiUploaderCtrl.$inject = ['rgService']

    function rgMultiUploaderCtrl(rgService) {
        const vm = this;
        vm.$onInit = onInit;
        vm.Clicker = Clicker;
        vm.Submit = Submit;
        vm.Cancel = Cancel;

        function onInit() {
            console.log("rg-muli-uploader componet")
        }

        // Attached to Cancel button in template
        function Cancel() {
            // Clears inputs and reloads state
            rgService.$cancel();
        }

        // Test button in upper left hand corner
        function Clicker(sku, obj) {
            if (obj) {
                console.log("OBJ EXISTS && typeof obj: ", typeof obj);
                console.error(" && obj[0] ", obj[0]);
                // create reader
                var reader = new FileReader();
                reader.readAsText(obj[0]);
                reader.onload = function (e) {
                    let objFile = e.target.result;
                    // browser completed reading file - display it
                    // alert(e.target.result);
                    // console.error(e.target.result);

                    // alert(objFile);
                    console.error("objFile: ", objFile); // typeof == string
                };
            } else {
                console.error("NO OBJ EXISTS", obj);
            }
            rgService.$test(sku, obj);


        }

        function Submit(sku, obj, mtl, texture) {
            let _sku = sku.toLowerCase();
            sku = 'sku' + sku;
            console.log(sku)
            let ng_content = { 'sku': sku, 'obj': obj[0], 'mtl': mtl[0], 'texture': texture[0] };
            // console.error('@ Component level ng_content: ', ng_content);
            rgService.$upload(ng_content);
        }

    } // END mainController
}());