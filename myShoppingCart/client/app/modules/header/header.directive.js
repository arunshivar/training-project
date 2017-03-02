/*Created by Arun
* */
/*custom directive for header used in index.html
* with search box and navigate to view page on selected product in search box*/
(function ()
{
    angular
        .module('headerModule')
        .directive('myHeader',myHeader);

    myHeader.$inject = ['$state'];
    function myHeader($state)
    {
        console.log("My Header");
        var directive = {
            restrict: 'EA',
            templateUrl: '../../partials/header.html',
            controller : MyHeaderController,
            controllerAs: 'MyHCtrl',
            bindToController: true,
            link:link
        };



        function link(scope, elem, attr)
        {
            scope.limitNameSearch = 300; //time for displaying suggestion
            /*on entering minimum of three characters display suggestions*/
            scope.checkName = function(lettersTyped)
            {

                if(lettersTyped.length > 2)
                {
                    scope.limitNameSearch = 500;
                }
                else{
                    scope.limitNameSearch = 0;
                }
            }
        }

        /*to change the state from home to view page on entering select */
        MyHeaderController.$inject = ['$state'];
        function MyHeaderController($state)
        {
            var vm = this;

            vm.onSelect = function(productId)
            {
                console.log("My Header on Select"+productId);
                $state.go('view',{id:productId});
            }
        }


        return directive;
    }

}())


