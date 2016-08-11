var StableMarriage = angular.module('StableMarriage', []);

StableMarriage.factory('Config', function() {
  return {
    baseUrl: 'http://localhost:3000/'
  };
});

StableMarriage.factory('StableMarriage', function(Config, $http) {
  return {
    getAll: function() {
      return $http.get(Config.baseUrl);
    }
  };
});

StableMarriage.controller('AppController', function($scope, $http, StableMarriage){


  // StableMarriage.getAll().success(function(data) {
  // });

});
