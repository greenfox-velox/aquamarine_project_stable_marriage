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
    .state('matching', {
      url: '/matching',
      templateUrl: 'matching.html',
      controller: 'AppController'
    });
  $locationProvider.html5Mode(true);
});

StableMarriage.factory('Config', function() {
  return {
    baseUrl: 'http://localhost:3000/',
    sponsorsUrl: '',
    studentsUrl: ''
  };
});

StableMarriage.factory('StableMarriageService', function(Config, $http) {
  return {
    landing: function() {
      return $http.get(Config.baseUrl);
    },
    getSponsors: function() {
      return $http.get(Config.sponsorsUrl);
    },
    getStudents: function() {
      return $http.get(Config.studentsUrl);
    }
  };
});

StableMarriage.controller('AppController', function($scope, $http, $state, StableMarriageService){
  $scope.students = [{
    "id": 1,
    "name": "Svejk",
    "priority_list": [1, 3, 2]
  },
  {
    "id": 2,
    "name": "Zotya",
    "priority_list": [2, 1, 3]
  },
  {
    "id": 3,
    "name": "Bastya elvtars",
    "priority_list": [3, 2, 1]
  }];
  $scope.sponsors = [{
    "id": 1,
    "name": "vidampark",
    "priority_list": [1, 3, 2],
    "participants_number": 1
  },
  {
    "id": 2,
    "name": "allatkert",
    "priority_list": [2, 3, 1],
    "participants_number": 1
  },
  {
    "id": 3,
    "name": "cirkusz",
    "priority_list": [1, 2, 3],
    "participants_number": 1
  }];

  // StableMarriageService.getSponsors().success(function (data){
  //   $scope.sponsors = data;
  // })
  //
  // StableMarriageService.getStudents().success(function (data) {
  //   $scope.students = data;
  // })

  $scope.showLists = false;
  $scope.showDetails = false;
});
