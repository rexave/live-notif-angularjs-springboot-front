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
	.controller('couleurCtrl', ['couleurNotificationService', "$scope", function (couleurNotificationService, $scope) {

		var vm = this;


		$scope.demanderChangerCouleur = demanderChangerCouleur;
		$scope.abonnementAuxCouleurs = abonnementAuxCouleurs;
		$scope.couleur = "indéfinie";
		$scope.listeCouleursDisponibles = [
			"bleu",
			"red",
			"green",
			"orange",
			"yellow",
			"black",
			"white"
		];

		function demanderChangerCouleur(nouvelleCouleur) {
			couleurNotificationService.changerCouleur(nouvelleCouleur);
			$scope.couleur = nouvelleCouleur;
		}

		function abonnementAuxCouleurs() {
			couleurNotificationService.subscribe();
		}

	}])
;

