(function() {
  'use strict';
  angular.module('pomo')
    .directive('pomoHeader', function() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/pomo-header.html',
        controller: ['$scope', function($scope) {
          
        }]
      }
    })
})();