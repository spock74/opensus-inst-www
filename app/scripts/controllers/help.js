'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:HelpCtrl
 * @description
 * # HelpCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('HelpCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
