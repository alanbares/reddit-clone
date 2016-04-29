(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('submitService', submitService);

  submitService.$inject = ['FIREBASE_URL'];

  function submitService(FIREBASE_URL) {

    var service = {
      Post: Post
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
