(function () {
    'use strict';

    angular
        .module('app.auth')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.when('/register', {
          templateUrl: 'app/auth/register.html',
          controller: 'AuthController',
          controllerAs: 'vm'
        });
				$routeProvider.when('/login', {
          templateUrl: 'app/auth/login.html',
          controller: 'AuthController',
          controllerAs: 'vm'
				});
        $routeProvider.when('/resetPassword', {
          templateUrl: 'app/auth/resetPassword.html',
          controller: 'AuthController',
          controllerAs: 'vm'
				});
        $routeProvider.when('/changePassword', {
          templateUrl: 'app/auth/changePassword.html',
          controller: 'AuthController',
          controllerAs: 'vm'
				});
    }

})();
