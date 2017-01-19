/**
 * Created by Arun on 19/1/17.
 */


(function()
{
    angular
        .module('viewModule')
        .controller('ViewController',ViewController);

    ViewController.$inject = ['$http','$stateParams'];
    function ViewController($http,$stateParams)
    {

        console.log('View Controller');
        vm = this;
        vm.params = $stateParams;


    }

}
());
