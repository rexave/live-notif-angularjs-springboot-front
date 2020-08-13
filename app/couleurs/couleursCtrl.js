'use strict';

angular.module('myApp.couleurs', [])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/test-couleur', {
				templateUrl: 'couleurs/couleurs.html',
				controller: 'couleurCtrl',
				controllerAs: 'vm'
			});
	}])
	.controller('couleurCtrl', ['couleurNotificationService', function (couleurNotificationService) {

		var vm = this;

		var couleur;

		vm.demanderChangerCouleur = demanderChangerCouleur;
		vm.abonnementAuxCouleurs = abonnementAuxCouleurs;
		vm.couleur = couleur;

		vm.$onInit = function () {
			couleur = "indéfinie";
		};

		function demanderChangerCouleur(nouvelleCouleur) {
			couleurNotificationService.changerCouleur(nouvelleCouleur);
			couleur = nouvelleCouleur;
		}

		function abonnementAuxCouleurs() {
			couleurNotificationService.subscribe();
		}

	}])
;

