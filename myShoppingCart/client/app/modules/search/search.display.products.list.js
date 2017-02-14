/**
 * Created by Arun on 1/2/17.
 *
 * Custom component to display list of products in search page
 */

(function(){

    angular
        .module('searchModule')
        .component('displayProductsList',
            {
                bindings:
                {
                    productList : '=',
                    productType : '@'
                },
                templateUrl: '../../partials/display-products-list.html',
                controller:displayProductsListController,
                controllerAs:'dplc'
            });

    displayProductsListController.$inject = ['searchFactory'];
    function displayProductsListController(searchFactory)
    {
        console.log("DisplayProducts List Controller");
        var vm = this;
        console.log("In displayProductsList Component "+vm.productType);

    }

}());
