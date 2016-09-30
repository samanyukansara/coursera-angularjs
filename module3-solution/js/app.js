(function (){
  'use strict';

  angular.module('FoodSearcher', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);



  //Controllers
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var searchController = this;


    searchController.search = function (){
      if (searchController.searchText === undefined){
        searchController.found = [];
      }else{
        var foundItems = MenuSearchService.getMatchedMenuItems(searchController.searchText.toLowerCase());
        foundItems.then(function (response){
          console.log("Response :", response);
          searchController.found = response;
        });
      }
    }

    searchController.removeItem = function (index){
      searchController.found.splice(index, 1);
    }
  }

  //Service
  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (response){
        var result = response.data.menu_items;
        console.log(result.length);
        var foundItems = [];
        
        for (var i=0; i<result.length; i++){
          if (result[i].description.toLowerCase().indexOf(searchTerm) !== -1){
            foundItems.push(result[i]);
          }
        }

        console.log(foundItems);
        return foundItems;
      }).catch(function(error){
        return error;
      });

      return response;
    };
  }

  //Directives
  function FoundItems(){
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }
})();