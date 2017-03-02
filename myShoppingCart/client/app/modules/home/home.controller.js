/**
 * Created by Arun on 17/1/17.
 */

(function()
{
    "use strict";
    angular
        .module('homeModule')
        .controller('HomeController',HomeController);


    HomeController.$inject = [];
    function HomeController()/*homeFactory,$rootScope*/
    {
        var vm = this;
        console.log("In home controller");
        //vm.products = $rootScope.products;


        /*$http.get('/api/v1/products/list')
            .success(function(data)
            {
                vm.products = data;
            })
            .error(function()
            {
                console.log("Failed to get data");
            });*/

        /*$http.get('/api/v1/products/list').
        success(function(data, status, headers, config) {
            //$scope.posts = data.posts;
        });*/


    }
}());

