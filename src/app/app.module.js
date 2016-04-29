(function() {
    'use strict';

    angular
        .module('app', [
        // Angular modules.
        'ngRoute',

        // Firebase modules.
        'firebase',

        // Custom modules.
        'app.auth',
        'app.core',
        'app.landing'
    ])
    .config(configFunction)

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        })
    }
})();
