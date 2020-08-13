'use strict';

angular.module('myApp.services', [])
	.service("couleurNotificationService", ['$http', '$q', 'webSocketService', function ($http, $q, webSocketService) {
		var service = {
			connexionAuTopic: connexionAuTopic,
			changerCouleur: changerCouleur,
			subscribe: subscribe
		};

		var maxX = 12;
		var maxY = 12;
		var listeSubscriber = Array.from({length: maxX}, () => Array.from({length: maxY}, () => "black"));;

		function changerCouleur(nouvelleCouleur) {
			console.log("changement demandé", nouvelleCouleur);
			var defer = $q.defer();
			$http.get("http://localhost:9999/couleur/activer/" + nouvelleCouleur + "/12/12")
				.then(function (data) {
					defer.resolve(data);
				}, function (data) {
					defer.reject(data);
				});
			return defer.promise;
		}

		function connexionAuTopic() {
			console.log("abonnement demandé");
			webSocketService.connexion('/topic/couleurs', notifierBoiteEnfant);
		}

		function subscribe(x, y, callbackOnMessage) {
			console.log("abonnement demandé", x, y);
			listeSubscriber[x][y] = callbackOnMessage;
		}

		function notifierBoiteEnfant(message) {
			var x = message.x;
			var y = message.y;
			var couleur = message.couleur;
			console.log("notification de la boite", x, y, couleur);
			listeSubscriber[x][y](couleur);
		}


		return service;
	}]);
