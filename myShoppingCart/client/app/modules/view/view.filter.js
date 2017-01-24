/**
 * Created by sb-c2-02 on 23/1/17.
 */


(function()
{
   angular
       .module('viewModule')
       .filter('byRange',byRange);

    function byRange()
    {
        console.log("View Filter");
        return function (products,price)
        {
            console.log("In filter function")
            var output = [];
            /*for(var i in products)
            {
                if(products[i].price >= price-1000 && products[i].price <= price+1000)
                    console.log(products[i].price +" **** " + products[i].name)
            }*/


            /*if(input !== "")
                if(isNaN(input))
                    return input.toUpperCase();
                else
                    return "Not a String";*/
        };
    }

}());
