/**
 * Created by Arun on 17/1/17.
 */

(function()
{
    "use strict";
    angular
        .module('homeModule')
        .controller('HomeController',HomeController);


    HomeController.$inject = ['homeFactory','$rootScope'];
    function HomeController(homeFactory,$rootScope)
    {
        var vm = this;
        console.log("In home controller");
        /* homeFactory.getData();*/
        vm.getAlbums = function() {
            homeFactory.getData()
                .then(function(data)
                    {
                        $rootScope.products = {};
                        $rootScope.products = data;
                        console.log('albums returned to controller.'+data);

                    },
                    function(data) {
                        console.log('albums retrieval failed.')
                    });
        };

        vm.getAlbums();


    }
}());

