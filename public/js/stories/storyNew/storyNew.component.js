myApp.component('storyNew', {
	templateUrl: '/js/stories/storyNew/storyNew.html',
	controller: function(storyService, $state) {
		this.story = {
			title	 :  '',
			name     :  '',
			animal   :  '',
			place    :  ''
		};
		this.save = function() {
			storyService.create(this.story)
			.then( res => {
				$state.go('storyShow', { id: this.story._id });
			});
		};
	}
});
