(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('submitService', submitService);

  submitService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function submitService($firebaseArray, firebaseDataService) {

    var service = {
      Post: Post,
      posts: $firebaseArray(firebaseDataService.root.child('posts'))
    };

    return service;

    /////////////

    function Post() {
      this.name = '';
      this.description = '';
      this.url = '';
      this.voteCount = 0;
    }
  }
})();
