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
		vm.login = login;
    vm.user = {
      email: '',
      password: ''
    }

    function register(user) {
      return firebaseAuthObject.$createUser(user)
				.then(function() {
					vm.login(user);
				})
				.catch(function(error) {
					console.log(error);
				});
    }

		function login(user) {
			return firebaseAuthObject.$authWithPassword(user)
				.then(function(loggedInUser) {
					console.log(loggedInUser);
				})
				.catch(function(error) {
					console.log(error);
				})
		}

  }
})();
