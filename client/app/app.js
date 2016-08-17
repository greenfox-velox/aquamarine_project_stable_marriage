var StableMarriage = angular
  .module('StableMarriage', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        templateURL: '../index.html',
        controller: 'AppController'
      });
  });

StableMarriage.factory('Config', function() {
  return {
    baseUrl: 'http://localhost:3000/',
    logUrl: 'http://localhost:3000/api/log'
  };
});

StableMarriage.factory('StableMarriageService', function(Config, $http) {
  return {
    landing: function() {
      return $http.get(Config.baseUrl);
    }
  };
});

StableMarriage.factory('logger', function(Config, $http) {
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
      $http.post(Config.logUrl, logEntry).then();
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

StableMarriage.controller('AppController', function($scope, $http, $state, $location, StableMarriageService, logger) {
  $scope.changeRouteSuccess = function() {
    logger.info('Route successfully changed to: ' + $location.patch());
  };

  $scope.changeRouteError = function() {
    logger.error('Error occurred while changing route');
  };

  $scope.$on('$stateChangeSuccess', function logRouteChange() {
    logger.debug('state change requested').then($scope.changeRouteSuccess, $scope.changeRouteError);
  });

  StableMarriageService.landing().then($scope.changeRouteSuccess, $scope.changeRouteError);
});
