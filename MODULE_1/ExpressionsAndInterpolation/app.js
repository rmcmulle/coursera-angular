(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Rmcmulle";
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function() {
    return "Ryan is typing this sentence right now!"
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
