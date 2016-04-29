(function () {
    'use strict';

    angular
        .module('app.submit')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/submit', {
          templateUrl: 'app/submit/submit.html',
          controller: 'SubmitController',
          controllerAs: 'vm'
        });
    }

})();
