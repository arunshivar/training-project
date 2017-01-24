
(function ()
{
    angular
        .module('myshop')
        .directive('myHeader',myHeader);

    myHeader.$inject = ['$state'];
    function myHeader($state)
    {
        console.log("My Header")
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
            scope.limitNameSearch = 500; //time for displaying suggestion
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
        MyHeaderController.$inject = ['$state'];
        function MyHeaderController($state, $stateParams)
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
/*

 vm.limitNameSearch = 500; //time for displaying suggestion
 vm.checkName = function(lettersTyped)
 {

 if(lettersTyped.length > 2)
 {
 vm.limitNameSearch = 500;
 }
 else{
 vm.limitNameSearch = 0;
 }
 }

 vm.onSelect = function(productId)
 {
 console.log("ON Select"+productId);
 $state.go('view',{id:productId});
 }
 */

