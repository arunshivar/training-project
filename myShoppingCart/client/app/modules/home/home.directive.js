/*custom directive to display top rated items on the subtype of product*/
(function ()
{
    'use-strict'

    angular
        .module('homeModule')
        .directive('topRatedProducts',topRatedProducts);

    function topRatedProducts()
    {
        console.log("Top rated products");

        var directive =
        {
            restrict : 'EA',
            templateUrl : '../../partials/top-rated-products.html',
            scope:
            {
                productList : '=',
                productType: '@'
            },
            link:link
        }
        function link(scope, elem, attr)
        {
            console.log("Link Function in toprated directive");

        }



        return directive;

    }


}());
