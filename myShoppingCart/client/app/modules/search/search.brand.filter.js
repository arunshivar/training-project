/**
 * Created by sb-c2-02 on 6/2/17.
 */

(function(){
    'use strict';

    angular
        .module('searchModule')
        .component('brandFilter',
            {
                bindings:
                {
                    productList :'=',
                    productType : '@',
                    brandList:'='
                },
                templateUrl: '../../partials/brand-filter.html',
                controller:brandFilterController,
                controllerAs:'bfc'
            });

    brandFilterController.$inject = ['searchFactory'];
    function brandFilterController(searchFactory)
    {
        var vm =  this;
        var checked = false;
        //checked array of brands from brand filter
        vm.brands = {
            array: []
        };

        console.log("Brand filter controller");

        //event function to get the products of checked brand name

        vm.brandChecked = function(brandsArray)
        {
            //if only one filter was checked and later uncheked then
            if(brandsArray.length == 0)
            {
                vm.clear();
            }
            else
            {
                vm.brandName = undefined;
                vm.checked = true;
                console.log("Checked brands " + brandsArray)
                vm.productList = searchFactory.getProductsOnBrandName(vm.productType, brandsArray);
                console.log(vm.productList);
            }

        }

        //to clear all the checked brand names
        vm.clear = function()
        {
            vm.brands.array = [];
            vm.checked = false;
            vm.productList = searchFactory.getProducts(vm.productType);

        }

    }

}());
