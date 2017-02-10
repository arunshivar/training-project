/**
 * Created by sb-c2-02 on 10/2/17.
 */


(function ()
{
    angular
        .module('searchModule')
        .component('offerFilter',
            {
                bindings:
                {
                    productList : '=',
                    productType : '@',
                    offerList : '='
                },
                templateUrl : '../../partials/offer-filter.html',
                controller : offerFilterController,
                controllerAs : 'ofc'

            }
        );

    offerFilterController.$inject = ['searchFactory'];
    function offerFilterController(searchFactory)
    {
        var vm = this;
        var checked = false;
        console.log("In offerFilterController")
        vm.offers = {
            array: []
        };

        //event function to get the products of checked offer type

        vm.offerChecked = function(offersArray)
        {
            //if only one filter was checked and later uncheked then
            if(offersArray.length == 0)
            {
                vm.checked = false;
                vm.productList = searchFactory.getProducts(vm.productType);
            }
            else
            {
                vm.offerType = undefined;
                vm.checked = true;
                console.log("Checked offers " + offersArray)
                vm.productList = searchFactory.getProductsOnOffer(vm.productType, offersArray);
                //console.log(vm.productList);
            }

        }

        //to clear all the checked brand offers
        vm.clear = function()
        {
            vm.offers.array = [];
            vm.checked = false;
            vm.productList = searchFactory.getProducts(vm.productType);

        }
    }


}());

