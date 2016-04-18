(function () {
  'use strict';

  angular
    .module('app.landing', [])
    .controller('landingController', landingController);

  landingController.$inject = ['$scope', 'firebase'];

  function landingController ($scope, firebase) {

  }

})();
