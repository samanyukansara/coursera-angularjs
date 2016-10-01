(function (){
	'use strict';

	angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['categories', 'MenuDataService'];
	function CategoriesController (categories, MenuDataService){
		var categoriesCtrl = this;
		categoriesCtrl.categories = categories;
		console.log(categoriesCtrl.categories);
	}

})();