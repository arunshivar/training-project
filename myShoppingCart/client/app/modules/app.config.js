/**
 * Created by Arun on 17/1/17.
 */

(function()
{
    "use strict";
    angular
        .module('myshop')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider'];

    function appConfig($stateProvider, $urlRouterProvider,$locationProvider)
    {
        console.log("App Config");
        $locationProvider.html5Mode(true);

        var homeState =
        {
            name:'/',
            url:'/',
            templateUrl: '../partials/home.html',
            controller: 'HomeController',
            controllerAs:'hc'

        }

        $stateProvider.state(homeState);

        $urlRouterProvider.otherwise('/');

    }

}());

