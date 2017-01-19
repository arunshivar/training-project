/**
 * Created by sb-c2-02 on 19/1/17.
 */

(function()
{
    "use strict";
    angular
        .module('homeModule')
        .controller('HeaderController',HeaderController);

    HeaderController.$inject = ['$rootScope'];
    function HeaderController($rootScope)
    {
        var vm = this;
        console.log('In header Controller');
    /* ****
     on entering minimum characters to show autocomplete suggestions
     ***** */
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


}
}());
