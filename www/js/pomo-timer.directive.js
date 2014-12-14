(function() {
  'use strict';

  angular.module('pomo')
    .directive('pomoTimer', ['$interval', function($interval) {
      return {
        restrict: 'E',
        templateUrl: 'templates/pomo-timer.html',
        replace: true,
        scope: {
          pomoTime: '@'
        },
        link: function(scope, elem, attrs) {
          scope.pomoStart = parseInt((scope.pomoTime ? scope.pomoTime: 15));
          scope.pomoTime = scope.pomoStart;
          scope.pomoPercent = 0;
          $interval(function() {
            scope.pomoTime--;
            scope.pomoPercent = (scope.pomoStart - scope.pomoTime) / scope.pomoStart;
          }, 1000);
        }
      }
    }]);

})();