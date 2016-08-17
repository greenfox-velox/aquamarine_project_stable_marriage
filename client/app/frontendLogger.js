'use strict';

StableMarriage.factory('logger', function($http) {

  var currentLevel = getCurrentLevel(DEFAULT_LOG_LVL);

  function getCurrentLevel(logLvl) {
    return LOGLEVELS.indexOf(logLvl);
  }

  function createLog(level, object) {
    var incomingLevel = getCurrentLevel(level);
    var logEntry = {
      date: Date(),
      level: level,
      data: object
    };
    if (currentLevel <= incomingLevel) {
      $http.post('/api/log', logEntry).then();
      console.log(logEntry);
    }
  }
  return {
    debug: function(log) {
      createLog('debug', log);
    },
    info: function(log) {
      createLog('info', log);
    },
    warn: function(log) {
      createLog('warn', log);
    },
    error: function(log) {
      createLog('error', log);
    }
  };
});
