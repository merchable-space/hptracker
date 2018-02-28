'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/tracker');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
      .state('main.tracker', {
        url: '/tracker',
        views: {
          'tab-tracker': {
            templateUrl: 'main/templates/tracker.html',
            controller: 'TrackCtrl as trackerVm'
          }
        }
      })
      .state('main.tracker-e', {
        url: '/tracker-e',
        views: {
          'tab-tracker-e': {
            templateUrl: 'main/templates/tracker-e.html',
            controller: 'TrackCtrl as trackerVm'
          }
        }
      });
});
