/**
 * Created by sb-c2-02 on 13/2/17.
 *
 * Product Filtetrs custom component with all three filters
 */

(function(){

    angular
        .module('searchModule')
        .component('productFilters',
            {
                bindings :
                {
                    productList :'=',
                    brandList : '=',
                    offerList : '=',
                    productType : '@'
                },
                templateUrl: '../../partials/product-filters.html',
                controller:productFiltersController,
                controllerAs:'pfc'

            }
        );
    productFiltersController.$inject = ['$rootScope','searchFactory'];
    function productFiltersController($rootScope,searchFactory)
    {
        console.log("Price Slider controller")
        var vm = this;
        var checkedBrand = false;
        var checkedOffer = false;
        //checked array of brands from brand filter
        vm.priceRange = undefined;

        vm.brands = {
            array: []
        };
        vm.offers =  {
            array: []
        };

        if(vm.productType == "Mobiles" || vm.productType == "Laptops")
        {
            $rootScope.minPrice = 1000;
            $rootScope.maxPrice = 85000;
            $rootScope.stepSize = 500;
        }
        else
        {
            $rootScope.minPrice = 10;
            $rootScope.maxPrice = 500;
            $rootScope.stepSize = 10;
        }
        setSlider();

        //to set the slider to default values on clicking clear filter
        vm.setDefault = function (productType)
        {
            console.log("Clear")
            setSlider();
            vm.priceRange =
            {
                "min": vm.slider.minValue,
                "max": vm.slider.maxValue
            }
            vm.productList= searchFactory.getProducts(vm.productType,vm.priceRange,vm.brands.array,vm.offers.array);
        }

        function setSlider()
        {
            vm.sliderDragged = false; //to show and hide the clear price slider filter
            vm.slider =
            {
                minValue: $rootScope.minPrice,
                maxValue: $rootScope.maxPrice,
                options: {
                    floor: $rootScope.minPrice,
                    ceil: $rootScope.maxPrice,
                    translate: function(value)
                    {
                        return '&#8377;' + value;
                    },
                    step: $rootScope.stepSize,
                    noSwitching: true,
                    /* onChange: function()*/
                    onEnd: function ()
                    {
                        vm.sliderDragged = true;
                        vm.priceRange =
                        {
                            "min": vm.slider.minValue,
                            "max": vm.slider.maxValue
                        }
                        vm.productList= searchFactory.getProducts(vm.productType,vm.priceRange,vm.brands.array,vm.offers.array);
                    }

                }
            };
        }
        //event function to get the products of checked brand name
        vm.brandChecked = function()
        {
            //if only one filter was checked and later uncheked then
            if(vm.brands.array.length == 0)
            {
                vm.clearBrands();
            }
            else
            {
                vm.brandName = undefined;
                vm.checkedBrand = true;
                vm.productList = searchFactory.getProducts(vm.productType,vm.priceRange,vm.brands.array,vm.offers.array);//vm.priceRange,vm.brands,vm.offers)
            }
        }

        //to clear all the checked brand names
        vm.clearBrands = function()
        {
            vm.brands.array = [];
            vm.checkedBrand = false;
            vm.productList = searchFactory.getProducts(vm.productType,vm.priceRange,vm.brands.array,vm.offers.array);
        }

        //event function to get the products of checked offer type
        vm.offerChecked = function()
        {
            //if only one filter was checked and later uncheked then
            if(vm.offers.array.length == 0)
            {
                vm.clearOffers();
            }
            else
            {
                vm.offerType = undefined;
                vm.checkedOffer = true;
                vm.productList = searchFactory.getProducts(vm.productType,vm.priceRange,vm.brands.array,vm.offers.array);
            }
        }
        //to clear all the checked brand offers
        vm.clearOffers = function()
        {
            vm.offers.array = [];
            vm.checkedOffer = false;
            vm.productList= searchFactory.getProducts(vm.productType,vm.priceRange,vm.brands.array,vm.offers.array);
        }
    }//controller
}());
