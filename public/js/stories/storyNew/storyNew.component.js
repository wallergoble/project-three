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
				console.log('this is the story you just made', res);
				$state.go('storyShow', { id: res.data._id });
			});
		};
	}
});
