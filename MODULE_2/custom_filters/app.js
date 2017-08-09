(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter) // REGISTER WITH MODULE (2)
.filter('truth', TruthFilter); // REGISTER WITH MODULE (2)

MsgController.$inject = ['$scope',
'lovesFilter']; // INJECT WITH nameFILTER (3)
function MsgController($scope, lovesFilter) { // INJECT WITH nameFILTER (3)
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  $scope.cookieCost = .45;

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    return msg;
  };

  $scope.sayLovesMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    var output = lovesFilter(msg);
    return output;
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

function LovesFilter() { // FILTER FACTORY FUNCTION (1)
  return function (input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  };
}

function TruthFilter() { // FILTER FACTORY FUNCTION (1)
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  };
}

})();
