function outboxService($firebaseObject, $firebaseArray) {

	var outbox = {
		
		messages: [],
		message: {},

		getMessages: getMessages,
		getMessage: getMessage,
		deleteMessage: deleteMessage
	};

		var rootRef = firebase.database().ref();
		var outboxRef = rootRef.child('outbox');
		var trashRef = rootRef.child('trash');

		outbox.outboxData = $firebaseArray(outboxRef);
		outbox.trashData = $firebaseArray(trashRef);

	function getMessages() {
		outbox.outboxData.$loaded()
			.then(function(data) {
				outbox.outboxData = data;
				console.log(outbox.outboxData);
			})
			.catch(function(error) {
				console.error("Error: ", error);
			})
		
			outbox.messages = outbox.outboxData;
	};
	outbox.getMessages();

	function getMessage(id) {
			outbox.message = outbox.outboxData[id];
	};

	function deleteMessage(index) {
		outbox.trashData.$add(outbox.outboxData[index]).
		then(function() {
			console.log('success');
			outbox.outboxData.$remove(outbox.outboxData[index]);
		})
	};

	return outbox;

};



angular.module('mailApp')
	.factory('outboxService', ['$firebaseObject', '$firebaseArray', outboxService]);