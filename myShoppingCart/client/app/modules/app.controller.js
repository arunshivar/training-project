/**
 * Created by Arun on 17/1/17.
 */

(function ()
{
    "use strict";
    angular
        .module('myshop')
        .controller('appController',appController);

    appController.$inject = ['$rootScope'];

    function appController($rootScope)
    {
        console.log("App Controller");

    }

}());

