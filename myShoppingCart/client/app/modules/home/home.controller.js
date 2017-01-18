/**
 * Created by Arun on 17/1/17.
 */

(function()
{
    "use strict";
   angular
       .module('homeModule')
       .controller('HomeController',HomeController);


    HomeController.$inject = ['homeFactory'];
    function HomeController(homeFactory)
    {
        var vm = this;
        console.log("In home controller");
        homeFactory.getData();

    }
}());

