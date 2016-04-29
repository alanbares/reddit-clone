(function () {
    'use strict';

    angular
        .module('app.submit')
        .controller('SubmitController', SubmitController);

    SubmitController.$inject = ['$location', 'submitService'];

    function SubmitController ($location, submitService) {
      var vm = this;

      // View model methods
      vm.newPost = new submitService.Post();
      vm.addPost = addPost;
      vm.posts = submitService.posts;

      function addPost() {
        vm.posts.$add(vm.newPost);
        vm.newPost = new submitService.Post();
        $location.path('/');
      }

    }

})();
