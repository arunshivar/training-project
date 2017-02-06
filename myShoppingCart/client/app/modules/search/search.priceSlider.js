/**
 * Created by sb-c2-02 on 2/2/17.
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
                    productType : '@'
                },
                templateUrl: '../../partials/price-slider.html',
                controller:priceSliderController,
                controllerAs:'psc'
            });
    priceSliderController.$inject = ['$rootScope','searchFactory'];
    function priceSliderController($rootScope,searchFactory)
    {
        console.log("price Slider controller")
        var vm = this;

        if(vm.productType == "Mobiles" || vm.productType == "Laptops")
        {
            console.log("In mobiles and laptops ***9*+*+*+")
            setSlider(1000,85000,500);
        }
        else
        {
            setSlider(10,500,10);
        }

        //to set the slider to default values on clicking clear button
        vm.setDefault = function (prodType)
        {
            console.log("Set Daefault")

            if(prodType == "Mobiles" || prodType == "Laptops")
            {

                setSlider(1000,85000,500);
            }
            else
            {
                setSlider(10,500,10);
            }

        }
        function setSlider(min,max,step)
        {
            console.log("Set slider")
            vm.slider =
            {
                minValue: min,
                maxValue: max,
                options: {
                    floor: min,
                    ceil: max,
                    translate: function(value)
                    {
                        return '&#8377;' + value;
                    },
                    step: step,
                    noSwitching: true,
                    onEnd: function()
                    {
                        console.log(vm.slider.minValue+"changed"+vm.slider.maxValue)
                        /*var productsWithinRange = searchFactory.getProductsWithinRange(vm.slider.minValue,vm.slider.maxValue)*/

                    }
                }
            };
        }

    }




}());
