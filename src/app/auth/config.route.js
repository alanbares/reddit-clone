(function () {
    'use strict';

    angular
        .module('app.auth')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/register', {
          templateUrl: 'app/landing/register.html',
          controller: 'AuthController',
          controllerAs: 'vm'
        });
    }

})();
