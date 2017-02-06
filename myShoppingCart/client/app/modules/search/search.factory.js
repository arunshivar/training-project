/**
 * Created by sb-c2-02 on 2/2/17.
 */

(function()
{
    'use strict';

    angular
        .module('searchModule')
        .factory('searchFactory',searchFactory);

    searchFactory.$inject = ['$rootScope']
    function searchFactory($rootScope)
    {
        var products = $rootScope.products;
        var productsOfType = [];
        var productsWithinRange = [];
        console.log("search Factory")
        var service =
        {
            getProducts : getProducts,
            getProductsWithinRange : getProductsWithinRange
        };

        return service;
        function getProducts(productType)
        {
            for(var i in products)
            {
                if(products[i].subType == productType)
                {
                    productsOfType.push(products[i]);
                }
            }
            return productsOfType;
        }

        function getProductsWithinRange(productType,min,max)
        {
            console.log("In get products with range "+min+" "+max);

            //console.log($rootScope.products)

            for(var i in products)
            {
                if(products[i].subType == productType)
                {
                    if (products[i].price >= min && products[i].price <= max)
                    {
                        console.log(products[i].price)
                        productsWithinRange.push(products[i]);
                    }
                }
            }
            return productsWithinRange;

        }


    }
}());
