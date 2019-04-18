(function () {
    'use strict';
    angular.module('app').config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'] // DEPENDENCY INJECTION INTO CONFIG
    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode(true) // Setting clean URLs (no hashtags)
        $stateProvider // DEFINING ADDITIONAL STATES FOR Single-Page-Application
            .state({
                name: 'nav',
                abstract: true,
                templateUrl: 'app/components/nav/nav.template.html'
                // component:'nav'
            })
            .state({
                name: 'nav.home',
                url: '/',
                component: 'home'
            })
            .state({
                name: 'nav.calculator',
                url: '/calculator',
                component: 'calculator'
            })
            .state({
                name: 'nav.rgUploader',
                url: '/rg-uploader',
                component: 'rgUploader'
            })
            .state({
                name: 'nav.rgMultiUploader',
                url: '/rg-multi-uploader',
                component: 'rgMultiUploader'
            })
            .state({
                name: 'nav.success',
                url: '/success',
                component: 'success'
            })
            .state({
                name: 'nav.error',
                url: '/error',
                component: 'error'
            })
    } // END CONFIG FUNCTION
}());