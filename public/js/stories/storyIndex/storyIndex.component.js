myApp.component('storyIndex', {
	templateUrl: '/js/stories/storyIndex/storyIndex.html',
	controller: function(storyService, $stateParams, $state) {
		// We set this value to be able to access the result of getStories
		this.stories = null;

		this.getStories = function() {
			storyService.getStories()
			.then( res => {
				this.stories = res.data
			});
		};
		// We have to call this function to render stories on initial view rendering
		this.getStories();

		// Helper function to link index and individual show routes
		this.show = function(story) {
			$state.go('storyShow', { id: story._id });
		};

		// Helper function to link to edit
		this.edit = function(story) {
			$state.go('storyEdit', { id: story._id });
		};

		this.delete = function(story) {
			console.log('this is story we are going to delete:', story);
			storyService.delete(story)
			.then( res => {
				this.getStories();
				$state.go('storyIndex');
			});
		};
	}
});
