/**
 * Created by sb-c2-02 on 2/2/17.
 *
 **/

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
        var productsOnBrand = [];
        var brands = [];
        console.log("Search Factory")
        var service =
        {
            getProducts : getProducts,
            getProductsWithinRange : getProductsWithinRange,
            getBrands : getBrands,
            getProductsOnBrandName :getProductsOnBrandName
        };

        return service;

        //get all the products based on product type mobiles, laptops and books
        function getProducts(productType)
        {
            productsOfType = [];
            console.log("In get prroducts saerch factory")
            for(var i in products)
            {
                if(products[i].subType == productType)
                {
                    productsOfType.push(products[i]);
                }
            }
            return productsOfType;
        }

        //get product within the price range
        function getProductsWithinRange(productType,min,max)
        {
            productsWithinRange = [];
            console.log("In get products with range "+min+" "+max);

            //console.log($rootScope.products)

            for(var i in products)
            {
                if(products[i].subType == productType)
                {
                    if (products[i].price >= min && products[i].price <= max)
                    {
                        productsWithinRange.push(products[i]);
                    }
                }
            }
            return productsWithinRange;
        }

        //get brandnames based on the product type like mobiles, laptops and books
        // to display in the brand filter in search page
        function getBrands(productType)
        {
            brands = [];
            console.log("In get brands");
            for(var i in products)
            {
                if(products[i].subType == productType)
                {
                    if (brands.indexOf(products[i].brand.trim()) == -1)
                    {
                        brands.push(products[i].brand.trim());
                    }
                }
            }
            return brands;
        }

        function getProductsOnBrandName(productType,brandsArray)
        {
            console.log("In getProductsOnBrandName "+brandsArray)

            productsOnBrand = [];
            for(var i in products)
            {
                if(products[i].subType == productType && brandsArray.includes(products[i].brand))
                {
                    console.log(products[i].subType+" * "+products[i].brand+" * "+products[i].name)
                    productsOnBrand.push(products[i]);
                }
            }
            return productsOnBrand;




        }

    }
}());
