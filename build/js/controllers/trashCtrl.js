function trashCtrl(trashService) {

	var vm = this;
	vm.messages = [];

	vm.getMessages = function() {
		vm.messages = trashService.messages;
	};
	vm.getMessages();

	vm.deleteMessage = function(index) {
		trashService.deleteMessage(index);
	};
	
};

angular.module('mailApp')
	.controller('trashCtrl', ['trashService', trashCtrl]);