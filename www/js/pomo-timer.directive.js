(function() {
  'use strict';

  angular.module('pomo')
    .directive('pomoTimer', ['$interval', function($interval) {
      return {
        restrict: 'E',
        templateUrl: 'templates/pomo-timer.html',
        replace: true,
        scope: {
          pomoTimeMinutes: '@',
          pomoTimeSeconds: '@',
        },
        link: function(scope, elem, attrs) { 

          scope.startSeconds = (scope.pomoTimeMinutes ? scope.pomoTimeMinutes: 15) * 60 +
                               (scope.pomoTimeSeconds ? scope.pomoTimeSeconds: 0);
          scope.currSeconds = 0;
          scope.percentComplete = 0;

          function tick() {
            scope.currSeconds++;
            scope.percentComplete = 100 - Math.round((scope.currSeconds / scope.startSeconds) * 100);
          }

          $interval(tick, 1000);
        }
      }
    }]);
})();