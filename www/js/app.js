(function() {
  'use strict'

  angular.module('pomo', ['ionic'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })
      .state('tab.timer', {
        url: '/timer',
        views: {
          'timer': {
            templateUrl: 'templates/timer.html',
            controller: 'TimerCtrl'
          }
        }
      })
      .state('tab.logs', {
        url: '/logs',
        views: {
        'logs': {
          templateUrl: 'templates/logs.html',
          controller: 'LogsCtrl'
          }
        }
      })
      .state('tab.reports', {
        url: '/reports',
        views: {
          'reports': {
            templateUrl: 'templates/reports.html',
            controller: 'ReportsCtrl'
          }
        }
      });
    $urlRouterProvider.otherwise('/tab/timer');
  });
})();
