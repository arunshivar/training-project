/**
 * Created by Arun on 17/1/17.
 */

(function()
{
    "use strict";
    angular
        .module('homeModule')
        .controller('HomeController',HomeController);


    HomeController.$inject = ['homeFactory','$rootScope'];
    function HomeController(homeFactory,$rootScope)/*homeFactory,$rootScope*/
    {
        var vm = this;
        console.log("In home controller");
        vm.products = $rootScope.products;

    }
}());

