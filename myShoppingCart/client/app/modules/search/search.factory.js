/**
 * Created by Arun on 2/2/17.
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
        var filteredProducts = [];
        var productsOfType = [];
        var brands = [];
        var offers = [];
        console.log("Search Factory")
        var service =
        {
            getProductsOnType : getProductsOnType,
            getBrands : getBrandsOnType,
            getOffers : getOffers,
            getProducts : getProducts
        };
        return service;
        //get all the products based on product type mobiles, laptops and books
        function getProductsOnType(productType)
        {
            productsOfType = [];
            for(var i in products)
            {
                if(products[i].subType == productType)
                {
                    productsOfType.push(products[i]);
                }
            }
            return productsOfType;
        }

        //get brandnames based on the product type like mobiles, laptops and books
        // to display in the brand filter in search page
        function getBrandsOnType(productType)
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

        //get Offers of a product type
        function getOffers(productType)
        {
            console.log("In getProductsOnType on Offer");
            offers = [];
            offers.push("Bank");
            offers.push("Exchange");
            offers.push("EMI");
            return offers;
        }

        /*
            to get the products and return to search page based on the three filters
        * */
        function getProducts(productType,priceRange,brandsArray,offersArray)
        {
            var finalProducts = [];
            if(priceRange != undefined && brandsArray.length == 0 && offersArray.length == 0)
            {
                return onPriceRange(productType,priceRange);
                //finalProducts =  onPriceRange(productType,priceRange);
            }
            else if(priceRange == undefined && brandsArray.length != 0 && offersArray.length == 0)
            {
                return onBrands(productType,brandsArray);
                //finalProducts =  onBrands(productType,brandsArray);
            }
            else if(priceRange == undefined && brandsArray.length == 0 && offersArray.length !=0)
            {
                return onOffers(productType,offersArray);
                //finalProducts =  onOffers(productType,offersArray);
            }
            else if(priceRange != undefined && brandsArray.length != 0 && offersArray.length == 0)
            {
                return priceAndBrand(productType,priceRange,brandsArray);
                //finalProducts = priceAndBrand(productType,priceRange,brandsArray);

            }
            else if(priceRange !=undefined && brandsArray.length == 0 && offersArray.length != 0)
            {
                return priceAndOffers(productType,priceRange,offersArray)
                //finalProducts =  priceAndOffers(productType,priceRange,offersArray)
            }
            else if(priceRange == undefined && brandsArray.length != 0 && offersArray.length != 0)
            {
                return brandAndOffers(productType,brandsArray,offersArray);
                //finalProducts =  brandAndOffers(productType,brandsArray,offersArray);
            }
            else if(priceRange != undefined && brandsArray.length != 0 && offersArray.length != 0)
            {
                return priceBrandOffer(productType,priceRange,brandsArray,offersArray);
                //finalProducts =  priceBrandOffer(productType,priceRange,brandsArray,offersArray);
            }

            /*if(finalProducts.length == 0)
            {
                //finalProducts.push(products[products.length - 1]);
                //console.log("****** "+products[products.length-1].id+" *******");
                finalProducts.push(products[products.length - 1])
            }*/
            //return finalProducts;
        }

        function  onOffers(productType,offersArray)
        {
            filteredProducts = [];
            for(var i in  products)
            {
                if(products[i].subType == productType)
                {
                    var offers = products[i].offers;
                    for (var j in offersArray)
                    {
                        if (offers[0].type.includes(offersArray[j]))
                        {
                            filteredProducts.push(products[i]);
                        }
                    }
                }
            }
            return filteredProducts;
        }

        function onBrands(productType,brandsArray)
        {
            filteredProducts = [];
            for(var i in products)
            {
                if (products[i].subType == productType)
                {
                    if (brandsArray.indexOf(products[i].brand) >= 0)
                    filteredProducts.push(products[i]);
                }
            }
            return filteredProducts;
        }

        function onPriceRange(productType,priceRange)
        {
            filteredProducts = [];
            for(var i in products)
            {
                if(products[i].subType == productType)
                {
                    if (products[i].price >= priceRange.min && products[i].price <= priceRange.max)
                    {
                        filteredProducts.push(products[i]);
                    }
                }
            }
            return filteredProducts;
        }

        function priceAndBrand(productType,priceRange,brandsArray)
        {
            filteredProducts = [];
            for(var i in products)
            {
                if(products[i].subType == productType)
                {
                    if (products[i].price >=priceRange.min && products[i].price <= priceRange.max && brandsArray.includes(products[i].brand))
                    {
                        filteredProducts.push(products[i]);
                    }
                }

            }
            return filteredProducts;
        }
        function priceAndOffers(productType,priceRange,offersArray)
        {
            filteredProducts = [];
            for(var i in  products)
            {
                if(products[i].subType == productType && products[i].price >= priceRange.min && products[i].price <= priceRange.max)
                {
                    var offers = products[i].offers;
                    for (var j in offersArray)
                    {
                        if (offers[0].type.includes(offersArray[j]))
                        {
                            filteredProducts.push(products[i]);
                        }
                    }
                }
            }
            return filteredProducts;
        }

        function brandAndOffers(productType,brandsArray,offersArray)
        {
            filteredProducts = [];
            for(var i in products)
            {
                if(products[i].subType == productType && brandsArray.includes(products[i].brand))
                {
                    var offers = products[i].offers;
                    for (var j in offersArray)
                    {
                        if (offers[0].type.includes(offersArray[j]))
                        {
                            filteredProducts.push(products[i]);
                        }
                    }
                }

            }
            return filteredProducts;
        }

        function priceBrandOffer(productType,priceRange,brandsArray,offersArray)
        {
            filteredProducts = [];
            for(var i in products)
            {
                if(products[i].subType == productType)
                {
                    if (products[i].price >=priceRange.min && products[i].price <= priceRange.max && brandsArray.includes(products[i].brand))
                    {
                        var offers = products[i].offers;
                        for (var j in offersArray)
                        {
                            if (offers[0].type.includes(offersArray[j]))
                            {
                                filteredProducts.push(products[i]);
                            }
                        }
                    }
                }
            }
            return filteredProducts;
        }
    }
}());
