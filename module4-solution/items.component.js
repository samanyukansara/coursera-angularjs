(function (){
	'use strict';

	angular.module('Data')
	.component('items', {
		templateUrl: 'templates/itemsComponent.html',
		bindings: {
			items : '<'
		}
	});

})();