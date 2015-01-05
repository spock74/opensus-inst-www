'use strict';

describe('Controller: TransparenciasCtrl', function () {

  // load the controller's module
  beforeEach(module('wwwApp'));

  var TransparenciasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TransparenciasCtrl = $controller('TransparenciasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
