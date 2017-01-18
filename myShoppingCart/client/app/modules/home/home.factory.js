/**
 * Created by Arun 18/1/17.
 */


(function () {
    "use strict";
    angular
        .module('homeModule')
        .factory('homeFactory',homeFactory);

    homeFactory.$inject = ["$http","$rootScope"];
    function homeFactory($http,$rootScope)
    {

        console.log("Home Factory invoked")
        var service =
        {
            getData : getData,
        };
        return service;

        function getData()
        {
            console.log("get data from home factory");
            $http.get('../../data/data.json')
                .success(function(data)
                {
                    console.log(data)
                    $rootScope.products = {};
                    $rootScope.products = data;
                    console.log(" ** "+$rootScope.products);
                    displayTopRated(data);

                })
                .error(function() {
                    console.log("File not found");
                });
        }
        function displayTopRated(data)
        {

            for( var i=0;i<data.length;i++)
            {
                //console.log(data[i].name);
                console.log(data[i].imgPath);
                /*$("ul").append("<li><img src="+data[i].imgPath+"/></li><br />")*/


            }
            console.log($rootScope.itemNames);


        }


    }

}());