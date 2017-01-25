/**
 * Created by sb-c2-02 on 19/1/17.
 *
 * Header controller
 */

(function()
{
    "use strict";
    angular
        .module('homeModule')
        .controller('HeaderController',HeaderController);

    HeaderController.$inject = ['$state','$rootScope'];
    function HeaderController($state)
    {
        var vm = this;
        console.log('In header Controller');
        vm.products = $rootScope.products;

    }

}());
