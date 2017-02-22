myApp.component('storyShow', {
	templateUrl: '/js/stories/storyShow/storyShow.html',
	controller: function(storyService, $stateParams) {
		// Defensive code
		this.story = null;

		// On page load to retrieve the story from the server
		storyService.getStory($stateParams.id)
		.then( res => {
			console.log(res.data);
			this.story = res.data;
		});
	}
});
