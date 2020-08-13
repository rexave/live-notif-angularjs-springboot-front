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

		$scope.listeX = genererListeNumer(12);
		$scope.listeY = genererListeNumer(12);

		function genererListeNumer(max) {
			var tab = [];
			for(var i=0;i<max;i++){
				tab.push(i);
			}
			return tab;
		}

		function demanderChangerCouleur(nouvelleCouleur) {
			couleurNotificationService.changerCouleur(nouvelleCouleur);
			$scope.couleur = nouvelleCouleur;
		}

		function abonnementAuxCouleurs() {
			couleurNotificationService.subscribe();
		}

	}])
;

