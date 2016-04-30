(function () {
    'use strict';

    angular
        .module('app.submit')
        .controller('SubmitController', SubmitController);

    SubmitController.$inject = ['$location', 'submitService', 'user'];

    function SubmitController ($location, submitService, user) {
      var vm = this;
      console.log(user);

      // View model methods
      vm.newPost = new submitService.Post();
      vm.addPost = addPost;

      function addPost() {
        submitService.posts.$add(vm.newPost);
        vm.newPost = new submitService.Post();
        $location.path('/');
      }
    }

})();
