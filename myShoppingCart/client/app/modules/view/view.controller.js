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


}
());
