/**
 * Created by Arun on 17/1/17.
 */

(function()
{
    "use strict";
    angular
        .module('myshop')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider','$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider)
    {
        console.log("App Config");
        /*$locationProvider.html5Mode(true);*/

        /*home page state to search a product by name and displays top rated items*/
        var homeState =
        {
            name:'/',
            url:'/',
            templateUrl: '../partials/home.html',
            controller: 'HomeController',
            controllerAs:'hc'

        }

        var viewState =
        {
            name:'view',
            url:'/view/:id',
            templateUrl: '../partials/view.html',
            controller: 'ViewController',
            controllerAs:'vc'
        }

        var searchState =
        {
            name:'search',
            url:'/search/:productType',
            templateUrl: '../partials/search.html',
            controller : 'searchController',
            controllerAs:'sc'

        }


        $stateProvider.state(homeState);
        $stateProvider.state(viewState);
        $stateProvider.state(searchState);

        $urlRouterProvider.otherwise('/');

    }

}());

