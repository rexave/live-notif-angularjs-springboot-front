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
	.controller('couleurCtrl', ['couleurNotificationService', "$scope", "$timeout", function (couleurNotificationService, $scope, $timeout) {

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

		$scope.maxX = 100;
		$scope.maxY = 100;

		$scope.listeX = genererListeNumer($scope.maxX);
		$scope.listeY = genererListeNumer($scope.maxY);

		function genererListeNumer(max) {
			var tab = [];
			for (var i = 0; i < max; i++) {
				tab.push(i);
			}
			return tab;
		}

		function demanderChangerCouleur(nouvelleCouleur) {
			$scope.couleur = "changement en cours";
			var changerCouleur = couleurNotificationService.changerCouleur(nouvelleCouleur);
			changerCouleur.then(function (response) {
				$scope.reponse = " [" + angular.toJson(response.data) + "]";
				$scope.couleur = nouvelleCouleur;
				$timeout(function () {
					$scope.reponse = "";
				}, 5000);
			});
		}


		function abonnementAuxCouleurs() {
			couleurNotificationService.connexionAuTopic($scope.maxX,$scope.maxY);
		}

	}])
;

