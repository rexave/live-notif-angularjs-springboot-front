angular.module('myApp.components', [])
	.component('boite', {
		templateUrl: 'core/components/boite-couleur-component.html',
		controller: BoiteController,
		bindings: {
			couleur: '<'
		}
	});

function BoiteController() {
	var ctrl = this;

}