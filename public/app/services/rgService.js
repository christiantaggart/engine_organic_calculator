(function () {
    'use strict'

    angular.module('app')
        .service('rgService', service)
    service.$inject = ['$http', '$stateParams', '$state']

    function service($http, $stateParams, $state) {
        let uploadUrl = '/api/multiupload';
        let msg;
        this.$upload = function (content) { // Adds a content
            var rgData = new FormData();

            rgData.append("sku", content.sku);
            rgData.append('obj', content.obj);
            rgData.append('mtl', content.mtl);
            rgData.append('texture', content.texture);

            return $http({
                url: uploadUrl,
                method: 'POST',
                data: rgData,
                headers: { 'Content-Type': undefined },
                //prevents serializing rgData.  don't do it.
                transformRequest: angular.identity
            }).then(function (res) {
                if (!res.data.includes('Error')) {
                    $state.go('nav.success');
                } else {
                    console.log(res.data);
                    $state.go('nav.error');
                }
            });
        }


        this.$test = function (sku, obj) { // Adds a content
            console.log("testttt", sku, obj);
        }

        // Clears inputs and reloads state
        this.$cancel = function () {
            console.error('Cancel button clicked, Refreshing page');
            $state.reload();
        }

        this.$home = function () {
            $state.go('nav.home');
        }
    }
})();