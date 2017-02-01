/**
 * Created by sb-c2-02 on 1/2/17.
 */

(function ()
{
    angular
        .module('searchModule')
        .controller('searchController',searchController);

    searchController.$inject = ['$stateParams','$rootScope'];
    function searchController($stateParams)
    {
        console.log('Search Controller');
        vm = this;
        console.log($stateParams.productType)
        vm.producType = $stateParams.productType;

    }

}());




