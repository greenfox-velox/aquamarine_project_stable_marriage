var StableMarriage = angular.module('StableMarriage', ['ui.router']);

StableMarriage.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'AppController'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'about.html',
      controller: 'AppController'
    })
  $locationProvider.html5Mode(true);
});

StableMarriage.factory('Config', function() {
  return {
    baseUrl: 'http://localhost:3000/'
  };
});

StableMarriage.factory('StableMarriageService', function(Config, $http) {
  return {
    landing: function() {
      return $http.get(Config.baseUrl);
    }
  };
});

StableMarriage.controller('AppController', function($scope, $http) {
  console.log('MAJOM');
  // StableMarriageService.getAll().success(function(data) {
  // });
});
