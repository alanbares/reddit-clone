(function () {
  'use strict';

  angular
    .module('app.landing')
    .controller('LandingController', LandingController);

  LandingController.$inject = ['$firebaseArray'];

  function LandingController ($firebaseArray) {
    var vm = this;
    var firePosts = new Firebase('https://reddit-clone-alan.firebaseio.com/posts');


    //View model methods
    vm.newPost = new Post();
    vm.posts = $firebaseArray(firePosts);
    vm.addPost = addPost;
    vm.deletePost = deletePost;
    vm.upVote = upVote;
    vm.downVote = downVote;


    function Post() {
      this.name = '';
      this.description = '';
      this.url = '';
      this.voteCount = 0;
    }

    function addPost() {
      vm.posts.$add(vm.newPost);
      vm.newPost = new Post();

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

