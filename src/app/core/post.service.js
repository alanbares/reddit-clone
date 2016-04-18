(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('postService', postService);

    postService.$inject = ['FIREBASE_URL', '$firebaseArray'];

    function postService(FIREBASE_URL, $firebaseArray) {
    var root = $firebaseArray (new Firebase(FIREBASE_URL));

    var service = {
      root: root
    };

    return service;
    }


})();
