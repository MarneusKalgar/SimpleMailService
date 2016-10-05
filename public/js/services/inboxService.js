function inboxService($firebaseObject, $firebaseArray) {

	var inbox = {
		
		messages: [],
		message: {},

		getMessages: getMessages,
		getMessage: getMessage,
		deleteMessage: deleteMessage,
		sendMessage: sendMessage
	};

		var rootRef = firebase.database().ref();
		var inboxRef = rootRef.child('inbox');
		var trashRef = rootRef.child('trash');
		var writeRef = rootRef.child('outbox');

		inbox.inboxData = $firebaseArray(inboxRef);
		
		inbox.writeData = $firebaseArray(writeRef);

		inbox.trashData = $firebaseArray(trashRef);

	function getMessages() {
		inbox.inboxData.$loaded()
			.then(function(data) {
				inbox.inboxData = data;
				console.log(inbox.inboxData);
			})
			.catch(function(error) {
				console.error("Error: ", error);
			})
		
			inbox.messages = inbox.inboxData;
	};
	inbox.getMessages();

	function getMessage(id) {
		inbox.message = inbox.inboxData[id];
	};

	function deleteMessage(index) {
		inbox.trashData.$add(inbox.inboxData[index]).
		then(function() {
			console.log('success');
			inbox.inboxData.$remove(inbox.inboxData[index]);
		})
	};

	function sendMessage(message) {
		inbox.writeData.$add({
			content: message.content,
			date: firebase.database.ServerValue.TIMESTAMP,
			subject: message.subj,
			whom: message.whom
		}).then(function() {
			message.whom = '';
			message.subj = '';
			message.content = '';
		});
	};

	return inbox;
};

angular.module('mailApp')
	.factory('inboxService', ['$firebaseObject', '$firebaseArray', inboxService]);