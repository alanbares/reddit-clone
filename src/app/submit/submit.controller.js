(function () {
    'use strict';

    angular
        .module('app.submit')
        .controller('SubmitController', SubmitController);

    SubmitController.$inject = ['$location', '$firebaseArray', 'FIREBASE_URL', 'submitService'];

    function SubmitController ($firebaseArray, $location, submitService, FIREBASE_URL) {
        var vm = this;
        var firePosts = new Firebase(FIREBASE_URL + 'posts');

        // View model methods
        vm.newPost = new submitService.Post();
        vm.addPost = addPost;


      function addPost() {
        vm.posts.$add(vm.newPost);
        vm.newPost = submitService.Post();
        $location.path('/');
      }

    }

})();
