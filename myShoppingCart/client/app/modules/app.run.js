/**
 * Created by Arun on 17/1/17.
 */

(function()
    {
        angular.module('myshop')
            .run(appRun);

        appRun.$inject = ['$rootScope','$http'];
        function appRun($rootScope,$http)
        {
            console.log("App Run")
            $http.get('../data/data.json')
                .success(function(data)
                {
                    $rootScope.products = {};
                    $rootScope.products = data;
                })
                .error(function()
                {
                    console.log("Failed to get data");
                });
            }


        function getData()
        {
            var def = $q.defer();
            console.log("Get data from factory method");
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
());