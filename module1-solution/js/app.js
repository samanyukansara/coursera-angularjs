(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    
    $scope.message = "";

    $scope.checkIfTooMuch = function (){
      var itemsString = $scope.foodItems;
      var items = [];
      if (itemsString){
        items = itemsString.split(',');
      }
      if (items.length == 0){
        $scope.message = "Please enter data first.";
      }else if(items.length <= 3){
        $scope.message = "Enjoy!!";
      }else if(items.length > 3){
        $scope.message = "Too much!!";
      }
    }

  }

})();