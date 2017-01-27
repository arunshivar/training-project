
(function()
{
   angular
       .module('viewModule')
       .filter('pagination',pagination);

    function pagination()
    {
        console.log("View Filter");
        return function(input, start)
        {
            start = +start;
            return input.slice(start);
        };

    }


}())
