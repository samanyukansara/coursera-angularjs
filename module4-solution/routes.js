(function (){
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig ($stateProvider, $urlRouterProvider){

	  $urlRouterProvider.otherwise('/');

	  // *** Set up UI states ***
	  $stateProvider

	  .state('home', {
	  	url: '/',
	  	templateUrl: 'templates/home.html'
	  })

	  .state('categories', {
	  	url: '/categories',
	  	templateUrl: 'templates/categories.html',
	  	controller: 'CategoriesController as categoriesCtrl',
	  	resolve: {
	  		categories : ['MenuDataService', function(MenuDataService){
	  			return MenuDataService.getAllCategories()
	  								.then(function (response){
	  									return response.data;
	  								});
	  		}]
	  	}
	  })

	  .state('categoryItems', {
	  	url: '/items/{categoryShortName}',
	  	templateUrl: 'templates/items.html',
	  	controller: 'ItemsController as itemsCtrl',
	  	resolve: {
	  		items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
	  			console.log("Category param: ",$stateParams.categoryShortName);
	  			return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
	  								.then(function (response){
	  									return response.data;
	  								});
	  		}]
	  	}
	  });


	}
})();