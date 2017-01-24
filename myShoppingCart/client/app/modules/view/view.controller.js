/**
 * Created by Arun on 19/1/17.
 */


(function()
{
    angular
        .module('viewModule')
        .controller('ViewController',ViewController);

    ViewController.$inject = ['$stateParams','viewFactory','$rootScope','simplePagination'];
    function ViewController($stateParams,viewFactory,$rootScope,simplePagination)
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

        /*vm.pagination = Pagination.getNew();
        vm.pagination.numPages = Math.ceil(vm.products.length/vm.pagination.perPage);*/
        vm.currentPage = 0;
        vm.pageSize = 10;

        vm.numberOfPages = function(){
            return Math.ceil(vm.products.length/vm.pageSize);
        }

    }


}
());
