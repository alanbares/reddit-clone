(function () {
  'use strict';

  angular
    .module('app.landing')
    .controller('LandingController', LandingController);

  LandingController.$inject = ['$firebaseArray'];

  function LandingController ($firebaseArray) {
    var vm = this;
    var firePosts = new Firebase('https://reddit-clone-alan.firebaseio.com/posts');



    vm.newPost = new Post();
    vm.posts = $firebaseArray(firePosts);
    vm.addPost = addPost;


    function Post() {
      this.name = '',
      this.description = '',
      this.url = '';
    }

    function addPost() {
      vm.posts.$add(vm.newPost);
    }
  }

})();

