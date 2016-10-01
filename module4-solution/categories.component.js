(function (){
	'use strict';

	angular.module('Data')
	.component('categories', {
		templateUrl: 'templates/categoriesComponent.html',
		bindings: {
			categories: '<',
		}
	});
})();