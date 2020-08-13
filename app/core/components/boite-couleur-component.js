angular.module('myApp.components', [])
	.component('boite', {
		templateUrl: 'core/components/boite-couleur-component.html',
		controller: ['couleurNotificationService', BoiteController],
		controllerAs: 'vm',
		bindings: {
			couleur: '@',
			x: '@',
			y: '@',
		}
	});

function BoiteController(couleurNotificationService) {
	var ctrl = this;

	ctrl.$onInit = function () {
		console.log("creation de la boite", ctrl.x, ctrl.y, ctrl.couleur);
		ctrl.couleurAffichee = "not initialized";
		couleurNotificationService.subscribe(ctrl.x, ctrl.y, changerCouleur);
	};

	function changerCouleur(nouvelleCouleur) {
		ctrl.couleurAffichee = nouvelleCouleur;
		ctrl.cssvar = {'background-color': nouvelleCouleur};
	}
}