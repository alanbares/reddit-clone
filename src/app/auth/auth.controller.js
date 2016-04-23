(function () {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$firebaseAuth'];

  function AuthController ($firebaseAuth) {
    var vm = this;
    var firebaseReference = new Firebase('https://reddit-clone-alan.firebaseio.com/');
    var firebaseAuthObject = $firebaseAuth(firebaseReference);

    // View model methods
    vm.register = register;
    vm.user = {
      email: '',
      password: ''
    }

    function register(user) {
      return firebaseAuthObject.$createUser(user);
    }

  }
})();
