/**
 * Created by sb-c2-02 on 24/1/17.
 *
 * custom directive for footer
 */

(function()
{
    angular
        .module('myshop')
        .directive('myFooter',myFooter);

    function myFooter()
    {
        console.log("My Footer directive");

        var directive =
        {
            restrict: 'EA',
            templateUrl: '../../partials/footer.html'
        };

        return directive;
    }
}())
