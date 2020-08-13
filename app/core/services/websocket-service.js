'use strict';

angular.module('myApp.ws', [])
	.service("webSocketService", ['$http', '$websocket', function ($http, $websocket) {
		var service = {
			connexion: connexion
		};

		var ws = null;

		/**
		 *
		 * @param callback fonction qui sera appelée sur un message
		 */
		function connexion(callback) {
			var dataStream = $websocket('ws://localhost:9999/websocket');
			dataStream.onMessage(callback);
		}

		return service;
	}]);


