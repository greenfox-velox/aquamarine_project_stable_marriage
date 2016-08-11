'use strict';

var log = (function() {
  function logInfo(message) {
    console.log('Info: ' + message);
  }

  function logDebug(message) {
    console.log('Debug: ' + message);
  }

  function logWarn(message) {
    console.log('Warn: ' + message);
  }

  function logError(message) {
    console.log('Error: ' + message);
  }

  return {
    logInfo: logInfo,
    logDebug: logDebug,
    logWarn: logWarn,
    logError: logError
  };
})();

module.exports = log;
