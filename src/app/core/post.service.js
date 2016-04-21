(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('postService', postService);

    postService.$inject = ['FIREBASE_URL'];

    function postService(FIREBASE_URL) {
    var root = new Firebase(FIREBASE_URL);

    var service = {
      root: root
    };

    return service;

    }



})();
