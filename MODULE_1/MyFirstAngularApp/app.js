(function () { // make sure no local variable bleed into global scope
'use strict';

angular.module('myFirstApp', []).controller(
  'MyFirstController', function($scope) {
    $scope.name = "rmcmulle"
    $scope.sayHello = function() {
      return "Hello!"
    }
  }
); // binds js to HTML

})();
