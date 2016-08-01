function writeCtrl(inboxService) {
	vm = this;
	vm.message = {};


	vm.sendMessage = function(message) {
		inboxService.sendMessage(message);
		vm.message.post = '';
	};

};


angular.module('mailApp')
	.controller('writeCtrl', ['inboxService', writeCtrl]);