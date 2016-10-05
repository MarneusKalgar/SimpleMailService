function inboxedEmailCtrl(inboxService, $stateParams) {
	var vm = this;
	vm.currentMessage = {};

	vm.getMessage = function() {
		 inboxService.getMessage($stateParams.id);
	}
	vm.getMessage();
	vm.currentMessage = inboxService.message;

	vm.sendReply = function(response) {
		inboxService.sendMessage(response);
		vm.currentMessage.response = '';
	};
}

angular.module('mailApp')
	.controller('inboxedEmailCtrl', ['inboxService', '$stateParams', inboxedEmailCtrl]);