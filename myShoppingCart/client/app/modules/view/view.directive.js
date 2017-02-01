/**
 * Created by sb-c2-02 on 25/1/17.
 */

(function()
{
    'use-strict'

    angular
        .module('viewModule')
        .directive('similarProducts',similarProducts);

    function similarProducts()
    {
        console.log("similar products directive");

        var directive =
        {
            restrict : 'EA',
            templateUrl : '../../partials/similar-products.html',
            scope:
            {
                productList : '=',
                productType: '@'
            },
            link:link

        };

        function link(scope,elements,attr)
        {

            scope.curPage = 0;
            scope.pageSize = 4;
            /*
             pagenation for similar products
             */
            scope.numberOfPages = function(subType)
            {
                var countSubType = 0;
                for(var i in scope.productList)
                {
                    if(scope.productList[i].subType == subType)
                        countSubType = countSubType+1;
                }
                return Math.ceil(countSubType / scope.pageSize);
            };
        }


        return directive;

    }

}());

