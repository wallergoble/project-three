myApp.component('storyEdit', {
	templateUrl: '/js/stories/storyEdit/storyEdit.html',
	controller: function(storyService, $state, $stateParams) {
		// put a helpful comment to why we did this
		this.story = null;

		this.show = function() {
			$state.go('storyShow', { id: this.story._id });
		};

		this.save = function() {
			storyService.update(this.story)
			.then( res => {
				$state.go('storyShow', { id: this.story._id });
			});
		};

		storyService.getStory($stateParams.id)
		.then( res => {
			this.story = res.data;
		});
	}
});

// // Edit Story Controller
// myApp.controller('editCtrl', function(storyService, $state, $stateParams) {
// 		// put a helpful comment to why we did this
// 		this.story = null;

// 		this.show = function() {
// 			$state.go('storyShow', { id: this.story._id });
// 		};

// 		this.save = function() {
// 			storyService.update(this.story)
// 			.then( res => {
// 				$state.go('storyShow', { id: this.story._id });
// 			});
// 		};

// 		storyService.getStory($stateParams.id)
// 		.then( res => {
// 			this.story = res.data;
// 		});
// });