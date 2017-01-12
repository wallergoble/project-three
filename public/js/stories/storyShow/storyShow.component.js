myApp.component('storyIndex', {
	templateUrl: '/js/stories/storyIndex/storyIndex.html',
	controller: function(storyService, $stateParams) {
		this.story = null;
		storyService.getStory($stateParams.id)
		.then( res => {
			console.log(res.data);
			this.story = res.data;
		});
		console.log(this.story);
	}
});
