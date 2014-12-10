(function() {
  'use strict';
  angular.module('pomo')
    .directive('pomoHeader', function() {
      return {
        restrict: 'E',
        templateUrl: 'templates/pomo-header.html',
        controller: ['$scope', function($scope) {
          
        }]
      }
    })
})();