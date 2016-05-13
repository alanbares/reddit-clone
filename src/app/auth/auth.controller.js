(function () {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['$location', 'authService'];

  function AuthController ($location, authService) {
    var vm = this;

    vm.user = {
      email: '',
      firstName: '',
      lastName:'',
      password: ''
    };

		// View model methods
    vm.register = register;
		vm.login = login;
		vm.logout = logout;
    vm.isLoggedIn = authService.isLoggedIn;

    function register(user) {
      return authService.register(user)
				.then(function(registeredUser) {
          var uniqueUser = authService.getUsersByUid(registeredUser.uid);
					vm.login(user);
          uniqueUser.$add({
            firstName: user.firstName,
            lastName: user.lastName
          });
				})
				.catch(function(error) {
					console.log(error);
				});
    }

		function login(user) {
			return authService.login(user)
				.then(function() {
					$location.path('/');
				})
				.catch(function(error) {
					console.log(error);
				})
		}

		function logout() {
			authService.logout();
			$location.path('/');
		}

  }
})();
