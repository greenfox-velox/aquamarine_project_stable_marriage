var StableMarriage = angular
  .module('StableMarriage', ['ui.router'])
  .config(function($stateProvider) {
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
    },

    postLog: function(message) {
      return $http.post(Config.logUrl, message);
    }
  };
});

StableMarriage.controller('AppController', function($scope, $http, $state, $location, StableMarriageService) {

  $scope.changeRouteSuccess = function() {
    console.log('route successfully changed to: ', $location.path());
  };

  $scope.changeRouteError = function() {
    console.log('error happened while changing route to: ', $location.path());
  };

  $scope.$on('$stateChangeSuccess', function logRouteChange() {
    var currentUrl = $location.newUrl;
    var newMessage = 'route changed to: ' + currentUrl;
    StableMarriageService.postLog(newMessage).then($scope.changeRouteSuccess, $scope.changeRouteError);
  });

  StableMarriageService.landing().then($scope.changeRouteSuccess, $scope.changeRouteError);
});
