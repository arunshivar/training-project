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
    function HomeController(homeFactory,$rootScope)/*homeFactory,$rootScope*/
    {
        var vm = this;
        console.log("In home controller");

        /* ****
            to fetch data from the json file and add it to $rootscope using promises
         ****   */
        vm.getData = function() {
            homeFactory.getData()
                .then(function(data)
                    {
                        $rootScope.products = {};
                        $rootScope.products = data;

                    },
                    function(data) {
                        console.log('Data retrieval failed.')
                    });
        };

        vm.getData();


        /* ****
            on entering minimum characters to show autocomplete suggestions
        ***** */
        vm.limitNameSearch = 500; //time for displaying suggestion
        vm.checkName = function(lettersTyped)
        {

            if(lettersTyped.length > 2)
            {
                vm.limitNameSearch = 500;
            }
            else{
                vm.limitNameSearch = 0;
            }
        }


    }
}());

