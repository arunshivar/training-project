/**
 * Created by sb-c2-02 on 2/2/17.
 *
 * search page custom directive for price slider
 */

(function()
{
    'use strict';
    angular
        .module('searchModule')
        .component('priceSlider',
            {
                bindings:
                {
                    productList :'=',
                    productType : '@'
                },
                templateUrl: '../../partials/price-slider.html',
                controller:priceSliderController,
                controllerAs:'psc'
            });
    priceSliderController.$inject = ['$rootScope','searchFactory'];
    function priceSliderController($rootScope,searchFactory)
    {
        console.log("Price Slider controller")
        var vm = this;

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
        vm.setDefault = function (prodType)
        {
            setSlider();
            vm.productList = searchFactory.getProducts(vm.productType);
        }

        function setSlider()
        {
            console.log("Set slider")
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
                        vm.productList= searchFactory.getProductsWithinRange(vm.productType,vm.slider.minValue,vm.slider.maxValue)
                    }
                }
            };
        }
    }
}());
