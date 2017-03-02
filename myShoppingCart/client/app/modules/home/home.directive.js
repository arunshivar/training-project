/*
 Created by Arun
    custom directive to display top rated items on the subtype of product
*/
(function ()
{
    'use-strict'

    angular
        .module('homeModule')
        .directive('topRatedProducts',topRatedProducts);

    topRatedProducts.$inject=['$http'];
    function topRatedProducts($http)
    {
        console.log("Top rated products");

        var directive =
        {
            restrict : 'EA',
            templateUrl : '../../partials/top-rated-products.html',
            scope:
            {
                //productList : '=',
                productType: '@'
            },
            link:link,
            controller:topRatedProductsController
        }

        topRatedProductsController.$inject = ['$scope','$http'];
        function topRatedProductsController($scope,$http)
        {
            //console.log("topRatedProductsController * * * * ");
            var type = $scope.productType;
            $http.get('/api/v1/topRatedProducts/?type='+type)
                //$http.get('/api/vi/topRatedProducts/'+'&q=' + JSON.stringify(query))
                .success(function(data)
                    {
                        $scope.productList = data;
                    }
                )
                .error(function()
                {
                    console.log("Failed to get data");
                });
        }

        function link(scope, elem, attr)
        {
            //console.log("Link Function in toprated directive");
            //var type = scope.productType;
        }
        return directive;
    }

}());
