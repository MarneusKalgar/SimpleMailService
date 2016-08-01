function emailCtrl(inboxService, $stateParams) {
	var vm = this;
	vm.currentMessage = {};

	vm.getMessage = function() {
		inboxService.getMessage($stateParams.id)
			.success(function(message) {
				vm.currentMessage = message;
				console.log('message returned to the controller', vm.currentMessage);
			})
			.error(function() {
				console.log('message returned failed');
			});
	};
	vm.getMessage();

	vm.sendReply = function(response) {
		inboxService.sendMessage(response);
		vm.currentMessage.response = '';
	};

}



angular.module('mailApp')
	.controller('emailCtrl', ['inboxService', '$stateParams', emailCtrl]);