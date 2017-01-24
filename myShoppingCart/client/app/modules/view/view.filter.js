

(function() {
    angular
        .module('viewModule')
        .filter('startFrom',startFrom);

    function startFrom()
    {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }

    }


}())
