'use strict';

angular.module('myApp.services', [])
	.service("couleurNotificationService", ['$http', '$q', 'webSocketService', function ($http, $q, webSocketService) {
		var service = {
			changerCouleur: changerCouleur,
			subscribe: subscribe
		};

		function changerCouleur(nouvelleCouleur) {
			console.log("changement demandé", nouvelleCouleur);
			var defer = $q.defer();
			$http.get("http://localhost:9999/couleur/activer/" + nouvelleCouleur)
				.then(function (data) {
					defer.resolve(data);
				}, function (data) {
					defer.reject(data);
				});
			return defer.promise;
		}

		function subscribe() {
			console.log("abonnement demandé");
			webSocketService.connexion(lorsquOnRecoitUnMessage);
		}

		function lorsquOnRecoitUnMessage(message){
			console.log(message);
		}

		return service;
	}]);
