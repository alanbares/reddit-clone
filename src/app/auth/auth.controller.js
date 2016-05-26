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
    vm.sendPasswordResetEmail = sendPasswordResetEmail;

    function register(user) {
      return authService.register(user)
				.then(function(registeredUser) {
          var uniqueUser = authService.getUsersByUid(registeredUser.uid);
					vm.login(user);
          uniqueUser.set({
            email: user.email,
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

    function sendPasswordResetEmail() {
      authService.firebaseAuthObject.$resetPassword({
        email: vm.user.email
      }).then(function() {
        $location.path('/changePassword')
        console.log('Password reset email was sent successfully');
      }).catch(function(error) {
        console.log('error', error);
      })
    };

//    function changePassword() {
//      authService.firebaseAuthObject.$changePassword({
//        email: vm.user.email,
//        oldPassword: vm.user.password,
//        newPassword: vm.user.password.isTemporaryPassword
//      })
//    }

  }
})();
