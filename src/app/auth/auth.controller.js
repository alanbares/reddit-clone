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
      oldPassword:'',
      newPassword:'',
      password: ''
    };

		// View model methods
    vm.register = register;
		vm.login = login;
    vm.isLoggedIn = authService.isLoggedIn;
    vm.sendPasswordResetEmail = sendPasswordResetEmail;
    vm.changePassword = changePassword;

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

    function sendPasswordResetEmail() {
      authService.firebaseAuthObject.$resetPassword({
        email: vm.user.email
      }).then(function() {
        $location.path('/changePassword');
        console.log('Password reset email was sent successfully');
      }).catch(function(error) {
        console.log('error', error);
      })
    };

    function changePassword() {
      authService.firebaseAuthObject.$changePassword({
        email: vm.user.email,
        oldPassword: vm.user.oldPassword,
        newPassword: vm.user.newPassword
      }).then(function() {
        console.log('Password changed successfully!');
        $location.path('/login');
      }).catch(function(error) {
        console.log('error', error);
      })
    }

  }
})();
