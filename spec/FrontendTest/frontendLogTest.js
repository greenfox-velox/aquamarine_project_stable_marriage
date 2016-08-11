'use strict';

describe('AppController', function() {

  beforeEach(module('StableMarriage'));
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
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should respond with status 200', function() {
      createController();
      $httpBackend.expectPOST('/api/log').respond(200, 'ok');
      $httpBackend.flush();
    });
  });
});
