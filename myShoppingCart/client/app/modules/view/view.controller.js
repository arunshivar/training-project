/**
 * Created by Arun on 19/1/17.
 */


(function()
{
    angular
        .module('viewModule')
        .controller('ViewController',ViewController);

    ViewController.$inject = ['$stateParams','viewFactory','$rootScope'];
    function ViewController($stateParams,viewFactory,$rootScope)
    {

        console.log('View Controller');
        vm = this;
        vm.params = $stateParams;

        /*find the selected product from the products array using view Factory*/
        var id = $stateParams.id;

        vm.products = $rootScope.products;
        var obj = viewFactory.getProduct(id,vm.products);

        console.log(" * "+obj.type)
        if(obj.type == 'electronics')
        {
            vm.subType = obj.subType;
            vm.name = obj.name;
            vm.brand = obj.brand;
            vm.price = obj.price;
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


            vm.color = obj.color;
            vm.battery = obj.battery;
            vm.rating = obj.rating;
            vm.description = obj.description;

            vm.offers = obj.offers;
            vm.comments = obj.comments;

        }

        else if(obj.type == 'books')
        {
            console.log(obj.subType)
            vm.subType = obj.subType;
            vm.name = obj.name;
            vm.price = obj.price;
            vm.author = obj.by;
            if(obj.hasOwnProperty('camera'))
            {

                vm.frontCamera = obj.camera.front;
                vm.rearCamera = obj.camera.rear;
            }
            else {
                vm.frontCamera = null;
                vm.rearCamera = null;
            }


            vm.color = obj.color;
            vm.battery = obj.battery;
            vm.rating = obj.rating;
            vm.description = obj.description;

            vm.offers = obj.offers;
            vm.comments = obj.comments;

        }

        vm.curPage = 0;
        vm.pageSize = 4;
        
        vm.numberOfPages = function(subType)
        {
            var countSubType = 0;
            for(var i in vm.products)
            {
                if(vm.products[i].subType == subType)
                    countSubType = countSubType+1;
            }
            return Math.ceil(countSubType / vm.pageSize);
        };


    }


}
());
