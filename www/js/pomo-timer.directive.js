(function() {
  'use strict';

  angular.module('pomo')
    .directive('pomoTimer', ['$interval', function($interval) {

      function init(scope) {
        scope.startSeconds = (scope.pomoTimeMinutes ? scope.pomoTimeMinutes: 15) * 60 +
                             (scope.pomoTimeSeconds ? scope.pomoTimeSeconds: 0);
        scope.currSeconds = 0;
        scope.percentComplete = 1.0;

        /**
         * Possible prompts to display to the user.
         */
        var prompts = 
          [
            "What's your goal?",
            "What do you want to get done?",
            "Goal?",
            "Task?"
          ];

          // select random prompt to display
          scope.prompt = prompts[Math.floor(Math.random() * prompts.length)];

      }

      function tickTimer(scope) {
        scope.currSeconds++;
        scope.percentComplete = 1.0 - (scope.currSeconds / scope.startSeconds);
      }

      return {
        restrict: 'E',
        templateUrl: 'templates/pomo-timer.html',
        replace: true,
        scope: {
        },
        link: function(scope, elem, attrs) { 
          init(scope);
          $interval(tickTimer(scope), 1000);
        }
      }
    }]);
})();