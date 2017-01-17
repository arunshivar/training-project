/**
 * Created by sb-c2-02 on 17/1/17.
 */

(function()
{
    angular
        .module('myshop')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider'];

    function appConfig($stateProvider, $urlRouterProvider,$locationProvider)
    {
        console.log("App Config");
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        var mobilesState =
        {
            name:'mobiles',
            url:'/mobiles',
            templateUrl:'../partials/mobiles.html'
        }

        var laptopsState =
        {
            name:'laptops',
            url:'/laptops',
            templateUrl:'../partials/laptops.html'
        }

        var fictionState =
        {
            name:'fiction',
            url:'/fiction',
            templateUrl:'../partials/fiction.html'
        }

        var comicState =
        {
            name:'comic',
            url:'/comic',
            templateUrl:'../partials/comic.html'
        }

        var biographiesState =
        {
            name:'biographies',
            url:'/biographies',
            templateUrl:'../partials/biographies.html'
        }

        $stateProvider.state(mobilesState);
        $stateProvider.state(laptopsState);
        $stateProvider.state(fictionState);
        $stateProvider.state(comicState);
        $stateProvider.state(biographiesState);






    }

}());

