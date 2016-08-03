function trashService($firebaseObject, $firebaseArray) {

	var trash = {
		
		messages: [],

		getMessages: getMessages,
		deleteMessage: deleteMessage
	};

		var rootRef = firebase.database().ref();
		var trashRef = rootRef.child('trash');

		trash.trashData = $firebaseArray(trashRef);

	function getMessages() {
		trash.trashData.$loaded()
			.then(function(data) {
				trash.trashData = data;
				console.log(trash.trashData);
			})
			.catch(function(error) {
				console.error("Error: ", error);
			})
		
			trash.messages = trash.trashData;
	};
	trash.getMessages();

	function getMessage(id) {
			trash.message = trash.trashData[id];
	};

	function deleteMessage(index) {
		trash.messages.splice(index, 1)
	};

	return trash;
};



angular.module('mailApp')
	.factory('trashService', ['$firebaseObject', '$firebaseArray', trashService]);