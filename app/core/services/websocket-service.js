'use strict';

angular.module('myApp.ws', [])
	.service("webSocketService", ['$http', '$stomp', function ($http, $stomp) {

		$stomp.setDebug(function (args) {
			console.debug(args);
		});

		var service = {
			connexion: connexion,
			deconnexion: deconnexion
		};

		var ws = null;

		/**
		 *
		 * @param topic {string}
		 * @param callback {function} fonction qui sera appelée sur un message
		 */
		function connexion(topic, callback) {
			return $stomp.connect('https://georges.local.sis.sncf.fr/websocket')
			// return $stomp.connect('http://localhost:9999/websocket')
				.then(function (frame) {
					//premier then = CONNECTED
					var subscription = $stomp.subscribe(topic, function (payload, headers, res) {
						callback(payload);
					});
				});
		}

		function deconnexion() {
			var promise = $stomp.disconnect();
			promise.then(function () {
				console.log('disconnected');
			});
			return promise;
		}

		return service;
	}]);


