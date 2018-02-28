'use strict';
angular.module('main')
.controller('TrackCtrl', function ($log, $http, $timeout, Main, Config, $cordovaDevice) {

  var trackerVm = this;

  trackerVm.allies = [];
  trackerVm.enemies = [];

  trackerVm.addAlly = addAlly;
  trackerVm.addEnemy = addEnemy;

  return trackerVm;

  function addAlly () {
    var thisAlly = {
      name: '',
      hp: 1,
      maxhp: 1,
      status: {}
    };

    trackerVm.allies.push(thisAlly);
  }

  function addEnemy () {
    var thisEnemy = {
      name: '',
      hp: 1,
      maxhp: 1,
      status: {}
    };

    trackerVm.enemies.push(thisEnemy);
  }

});
