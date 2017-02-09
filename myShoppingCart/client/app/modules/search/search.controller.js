/**
 * Created by sb-c2-02 on 1/2/17.
 *
 *
 */

(function ()
{
    angular
        .module('searchModule')
        .controller('searchController',searchController);

    searchController.$inject = ['$stateParams','searchFactory'];
    function searchController($stateParams,searchFactory)
    {
        console.log('Search Controller');
        vm = this;
        console.log($stateParams.productType)
        vm.productType = $stateParams.productType;
        vm.products = searchFactory.getProducts(vm.productType);

        //get the brandnames only if product type is mobiles and laptops books doesn't have any brand
        if(vm.productType == "Mobiles" || vm.productType == "Laptops")
            vm.brands = searchFactory.getBrands(vm.productType);
    }

}());




