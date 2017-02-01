/**
 * Created by sb-c2-02 on 31/1/17.
 */
;

'use strict';
(function()
{
    angular.module('viewModule').component('displayProduct',
        {
            bindings:
            {
                productList : '=',
                paramId: '@'
            },
            templateUrl: '../../partials/display-product.html',
            controller:displayProductController,
            controllerAs:'dpc'
        });

    displayProductController.$inject=['viewFactory'];
    function displayProductController(viewFactory)
    {
        var vm = this;
        console.log("In Component "+vm.paramId);
        var id = vm.paramId;

        var obj = viewFactory.getProduct(id,vm.productList);

        if(obj.type == 'electronics')
        {

            vm.brand = obj.brand;
            vm.modelName = obj.modelName;
            vm.ram = obj.RAM;

            if(obj.hasOwnProperty('camera'))
            {

                vm.frontCamera = obj.camera.front;
                vm.rearCamera = obj.camera.rear;
            }
            else {
                vm.frontCamera = null;
                vm.rearCamera = null;
            }

        }

        else if(obj.type == 'books')
        {
            console.log(obj.subType)
            vm.type = obj.type;
            vm.author = obj.by;

        }
        vm.name = obj.name;
        vm.price = obj.price;
        vm.color = obj.color;
        vm.subType = obj.subType;
        vm.battery = obj.battery;

        vm.description = obj.description;
        vm.offers = obj.offers;
        /*vm.rating = obj.rating;*/
        vm.rating = viewFactory.getRating(obj.comments);
        vm.comments = obj.comments;

    }
}());

