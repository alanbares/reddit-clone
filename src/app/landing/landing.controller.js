(function () {
  'use strict';

  angular
    .module('app.landing')
    .controller('LandingController', LandingController);

  LandingController.$inject = ['submitService'];

  function LandingController (submitService) {
    var vm = this;


    //View model methods
    vm.newPost = new submitService.Post();
    vm.posts = submitService.posts;
    vm.addPost = addPost;
    vm.deletePost = deletePost;
    vm.upVote = upVote;
    vm.downVote = downVote;

    function addPost() {
      vm.posts.$add(vm.newPost);
      vm.newPost = new submitService.Post();

    }

    function deletePost(post) {
      vm.posts.$remove(post);
    }

    function upVote(post) {
      post.voteCount++;
      vm.posts.$save(post);
    }

    function downVote(post) {
      post.voteCount--;
      vm.posts.$save(post);
    }

  }

})();

