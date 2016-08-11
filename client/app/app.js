var StableMarriage = angular
  .module('StableMarriage', ['ui.router'])
  .config(function($stateProvider){
    $stateProvider
      .state('mainPage', {
        url: '/',
        templateURL: '../index.html',
        controller: 'AppController' ,
      })
  });

StableMarriage.factory('Config', function() {
  return {
    baseUrl: 'http://localhost:3000/'
  };
});

StableMarriage.factory('StableMarriage', function(Config, $http) {
  return {
    landing: function() {
      return $http.get(Config.baseUrl);
    }
  };
});

StableMarriage.controller('AppController', function($scope, $http, $state, StableMarriage){


  // StableMarriage.getAll().success(function(data) {
  // });

});
