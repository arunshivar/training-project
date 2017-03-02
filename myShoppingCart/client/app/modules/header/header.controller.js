/**
 * Created by Arun on 19/1/17.
 *
 * Header controller
 */

(function()
{
    "use strict";
    angular
        .module('headerModule')
        .controller('HeaderController',HeaderController);

    HeaderController.$inject = ['$http'];
    function HeaderController($http)
    {
        var vm = this;
        console.log('In header Controller');
        $http.get('/api/v1/products/list')
            .success(function(data)
            {
                console.log(data)
                vm.products = data;
            })
            .error(function()
            {
                console.log("Failed to get data");
            });

    }

}());
