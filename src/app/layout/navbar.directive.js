(function () {
	'use strict';

	angular
		.module('app.layout')
		.directive('abNavbar', abNavbar);

	function abNavbar() {
		return {
			templateUrl: 'app/layout/navbar.html',
			restrict: 'E',
			scope: {},
			controller: NavbarController,
			controllerAs: 'vm'
		};
	}

	NavbarController.$inject = ['$location', 'authService'];

	function NavbarController($location, authService) {
		var vm = this;

		vm.isLoggedIn = authService.isLoggedIn;
		vm.logout = logout;

		function logout() {
			authService.logout();
			$location.path('/');
		}
	}
})();


