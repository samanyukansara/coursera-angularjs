(function (){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  //CONTROLLERS
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService){
    var buyList = this;

    buyList.items = ShoppingListCheckOffService.getAvailableItemsList();

    buyList.moveToBoughtList = function(index){
      ShoppingListCheckOffService.addToBoughtList(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService){
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItemsList();
  }

  //SERVICES
  function ShoppingListCheckOffService(){
    var service = this;

    var availableItemsList = [
    {
      name: "Cookies",
      quantity: 10
    },
    {
      name: "Bread",
      quantity: 2
    },
    {
      name: "Pizza",
      quantity: 5
    },
    {
      name: "Chips",
      quantity: 2
    },
    {
      name: "Chilli Sauce",
      quantity: 1
    }];

    var boughtItemsList = [];

    service.addToBoughtList = function(index){
      var item = availableItemsList.splice(index, 1);
      boughtItemsList.push(item[0]);
      console.log(boughtItemsList);
    };

    service.getAvailableItemsList = function(){
      return availableItemsList;
    };

    service.getBoughtItemsList = function(){
      return boughtItemsList;
    };
  }

})();