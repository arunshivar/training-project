/**
 * Created by Arun 18/1/17.
 */


(function () {
    "use strict";
    angular
        .module('homeModule')
        .factory('homeFactory',homeFactory);

    homeFactory.$inject = ['$http','$q']; // $q to returned promised reply
    function homeFactory($http,$q)
    {
        console.log("Home Factory")
        var service =
        {
            getData : getData
        };
        return service;

        function getData()
        {
            var def = $q.defer();
            console.log("Get data from home factory ");
            $http.get('../../data/data.json')
                .success(function(data)
                {
                    def.resolve(data);
                })
                .error(function()
                {
                    def.reject("Failed to get albums");
                });
            return def.promise;
        }

    }

}());