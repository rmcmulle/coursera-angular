(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
  $scope.counter = 0;

  $scope.upCounter = function () {
    //  setTimeout(function () {
    // //   $scope.counter++;
    // //   console.log("Counter Incremented");
    // //   $scope.$digest(); // forces watcher to check $scope.counter
    //   $scope.$apply(function () { // better way to have watchers check
    //     $scope.counter++;
    //     console.log("Counter incremented!");
    //   });
    // }, 2000);

    // USE TIMEOUT SERVICE

    $timeout(function () {
      $scope.counter++;
      console.log("Counter incremented!");
    }, 2000);

  };
}

})();
