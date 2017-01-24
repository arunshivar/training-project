/**
 * Created by sb-c2-02 on 24/1/17.
 */

(function()
{
    angular
        .module('myshop')
        .directive('myFooter',myFooter);

    function myFooter()
    {
        console.log("My Footer");

        var directive =
        {
            restrict: 'EA',
            templateUrl: '../../partials/footer.html'
        };

        return directive;
    }
}())
