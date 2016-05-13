(function () {
  'use strict';

  angular
    .module('app.auth')
    .factory('authService', authService);

  authService.$inject = ['$firebaseAuth', '$firebaseArray', 'firebaseDataService'];

  function authService($firebaseAuth, $firebaseArray, firebaseDataService) {
    var firebaseAuthObject = $firebaseAuth(firebaseDataService.root);

    var service = {
      firebaseAuthObject: firebaseAuthObject,
      register: register,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      getUsersByUid: getUsersByUid
    }

    return service;

    //////////////

    function register(user) {
      return firebaseAuthObject.$createUser(user);
    }

    function login(user) {
      return firebaseAuthObject.$authWithPassword(user);
    }

    function logout() {
       firebaseAuthObject.$unauth();
    }

    function isLoggedIn() {
      return firebaseAuthObject.$getAuth();
    }

    function getUsersByUid(uid) {
      return $firebaseArray(firebaseDataService.users.child(uid).child('user'));
    }

  }
})();
