(function () {
  'use strict';

  angular.module('LCApp', [])
  //.controller('DIController', ['$scope', '$filter',DIController);
  .controller('LCController', LCController);

  LCController.$inject = ['$scope','$filter'];
  function LCController ($scope,
                         $filter) {
    $scope.list = ""; // declare empty list to hold lunch items
    $scope.items = []; // empty array to hold individual items

    $scope.check = function () {
      /* Checks if number of items in $scope.list are below or above 3 */
      // console.log($scope.list);

      // Separate items by comma
      $scope.items = $scope.list.split(",");

      /* CHECKING */
      // for (var i = 0 ; i < $scope.items.length ; i++) {
      //   console.log($scope.items[i]);
      // }
      // console.log("Old: " + $scope.items.length);
      /* END CHECKING */

      // Check for enpty strings and spaces
      var re = /\S/; // regular expression
      // filter array using regular expression
      $scope.items = $scope.items.filter(re.test.bind(re));
      // console.log("New: " + $scope.items.length);

      // Count and change to appropriate message
      $scope.message = "Please enter data first";
      if ($scope.items.length == 0) {
        $scope.message = "Please enter data first!"
      }
      else if ($scope.items.length <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    };
  }
})();
