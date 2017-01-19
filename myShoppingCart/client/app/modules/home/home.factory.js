/**
 * Created by Arun 18/1/17.
 */


(function () {
    "use strict";
    angular
        .module('homeModule')
        .factory('homeFactory',homeFactory);

    homeFactory.$inject = ['$http','$rootScope', '$q'];
    function homeFactory($http,$rootScope,$q)
    {

        console.log("Home Factory invoked")
        var service =
        {
            getData : getData,
        };
        return service;

        function getData()
        {
            var def = $q.defer();
            console.log("get data from home factory");
            $http.get('../../data/data.json')
                .success(function(data)
                {
                    console.log(data)
                    def.resolve(data);

                    /*console.log(" ** "+$rootScope.products);
                    displayTopRated(data);*/

                })
                .error(function()
                {
                    def.reject("Failed to get albums");
                });
            return def.promise;
        }
        function displayTopRated(data)
        {

            /*for( var i=0;i<data.length;i++)
            {
                //console.log(data[i].name);
                console.log(data[i].imgPath);
                /!*$("ul").append("<li><img src="+data[i].imgPath+"/></li><br />")*!/


            }*/
            console.log($rootScope.itemNames);


        }


    }

}());