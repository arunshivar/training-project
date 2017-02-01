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

        vm = this;
        vm.params = $stateParams;

        /*find the selected product from the products array using view Factory*/
        var id = $stateParams.id;

        vm.products = $rootScope.products;

        var obj = viewFactory.getProduct(id,vm.products);
        vm.subType = obj.subType;

    }


}
());
