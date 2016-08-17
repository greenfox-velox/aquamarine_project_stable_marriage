'use strict';

describe('AppController', function() {

  beforeEach(angular.mock.module('StableMarriage'));

  describe('AppController', function() {

    var $httpBackend;
    var $rootScope;
    var createController;


    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $rootScope = $injector.get('$rootScope');
      var $controller = $injector.get('$controller');


      createController = function() {
        return $controller('AppController', {'$scope': $rootScope });
      };
      createController();
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should properly connect to the landing page', function() {
      $httpBackend.expectGET('http://localhost:3000/').respond(200, 'ok');
      $httpBackend.flush();
    });

    it('should respond with status 200', function() {
      $httpBackend.expectGET('http://localhost:3000/').respond(200, 'ok');
      $httpBackend.expectPOST('http://localhost:3000/api/log').respond(200, 'ok');
      $httpBackend.flush();
    });
  });
});
