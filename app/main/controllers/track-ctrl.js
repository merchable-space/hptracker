'use strict';
angular.module('main')
.controller('TrackCtrl', function () {

  var trackerVm = this;

  trackerVm.allies = [];
  trackerVm.enemies = [];

  trackerVm.addAlly = addAlly;
  trackerVm.addEnemy = addEnemy;
  trackerVm.swapStatus = swapStatus;
  trackerVm.deleteMe = deleteMe;
  trackerVm.addHealth = addHealth;
  trackerVm.remHealth = remHealth;

  return trackerVm;

  function addAlly () {
    var thisAlly = {
      deleted: false,
      name: '',
      hp: 1,
      maxhp: 1,
      changeHpValue: 1,
      status: {
        'blind': false,
        'charm': false,
        'deaf': false,
        'fatigue': false,
        'grapple': false,
        'incap': false,
        'invis': false,
        'paralyze': false,
        'petrify': false,
        'poison': false,
        'prone': false,
        'restrain': false,
        'stun': false,
        'unconcious': false,
      },
      'hover': '',
    };

    trackerVm.allies.push(thisAlly);
  }

  function addEnemy () {
    var thisEnemy = {
      deleted: false,
      name: '',
      hp: 1,
      maxhp: 1,
      changeHpValue: 1,
      status: {
        'blind': false,
        'charm': false,
        'deaf': false,
        'fatigue': false,
        'grapple': false,
        'incap': false,
        'invis': false,
        'paralyze': false,
        'petrify': false,
        'poison': false,
        'prone': false,
        'restrain': false,
        'stun': false,
        'unconcious': false,
      },
      'hover': '',
    };

    trackerVm.enemies.push(thisEnemy);
  }

  function swapStatus (object, stat) {
    if (object.status[stat] === true) {
      object.status[stat] = false;
    } else {
      object.status[stat] = true;
    }
  }

  function addHealth (object) {
    object.hp += parseInt(object.changeHpValue);
  }

  function remHealth (object) {
    if (object.hp <= 0) {
      return false;
    }

    object.hp -= parseInt(object.changeHpValue);
  }

  function deleteMe (object) {
    object.deleted = true;
  }

});
