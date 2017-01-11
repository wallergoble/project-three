// Show Story Controller

myApp.controller('showCtrl', function(storyService, $stateParams) {
	this.story = null;
	storyService.getStory($stateParams.id)
	.then( res => {
		console.log(res.data);
		this.story = res.data;
	});
	console.log(this.story);
});
