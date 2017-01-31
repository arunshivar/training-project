/**
 * Created by Arun on 19/1/17.
 */

(function()
{
    angular
        .module('viewModule')
        .factory('viewFactory',viewFactory);

    console.log('View Factory');
    viewFactory.$inject = ['$http','$rootScope'];
    function viewFactory($rootScope)
    {
        var service =
        {
            getProduct : getProduct,
            getRating : getRating

        };
        return service;

        /*to return the selected product*/
        function getProduct(id,products)
        {

            for(var i in products)
            {

                if(products[i].id == id)
                {
                    console.log("Product  found "+id);
                    return products[i];
                }
            }

        }

        function getRating(comments)
        {
            console.log('get rating')
            var totalRating = 0;
            for(var i in comments)
            {
                totalRating = totalRating + parseInt(comments[i].rating);
            }

            return (totalRating/comments.length).toFixed(1);

        }



    }


}());