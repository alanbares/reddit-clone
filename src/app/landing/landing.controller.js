(function () {
  'use strict';

  angular
    .module('app.landing')
    .controller('LandingController', LandingController);

  LandingController.$inject = ['submitService'];

  function LandingController (submitService) {
    var vm = this;


    //View model methods
    vm.posts = submitService.posts;
    vm.deletePost = deletePost;
    vm.upVote = upVote;
    vm.downVote = downVote;

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

