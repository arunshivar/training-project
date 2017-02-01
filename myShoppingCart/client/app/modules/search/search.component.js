/**
 * Created by sb-c2-02 on 1/2/17.
 */

(function(){

    angular
        .module('searchModule')
        .component('displayProductsList',
            {
                bindings:
                {
                    productType : '@'
                },
                templateUrl: '../../partials/display-products-list.html',
                controller:displayProductsListController,
                controllerAs:'dplc'
            });

    displayProductsListController.$inject = ['$rootScope'];
    function displayProductsListController($rootScope)
    {
        console.log("displayProductsListController");
        var vm = this;
        console.log("In Component "+vm.productType);
        vm.productList = $rootScope.products;


    }


}());
