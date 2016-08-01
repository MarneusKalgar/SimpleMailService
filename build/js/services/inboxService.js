function inboxService($http) {
	var inbox = {

		messages: [],
		message: {},

		getMessages: getMessages,
		getMessage: getMessage,
		deleteMessage: deleteMessage,
		sendMessage: sendMessage
	};

	function getMessages() {
		return $http.get('json/emails.json')
			.success(function (data) {
				inbox.messages = data;
			});
	};

	function getMessage(id) {
		return $http.get('json/emails/' + id + '.json')
			.success(function (data) {
				inbox.message = data;
			});
	};

	function deleteMessage(index) {
		inbox.messages.splice(index, 1)
	};

	function sendMessage(message) {
		if (message) {
			console.log(message + ' was sended!');
		}
	};

	return inbox;
};



angular.module('mailApp')
	.factory('inboxService', ['$http', inboxService]);