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
		
		// Random name function to add randomness to story
		this.getRandomNames = function() {
			let names = ['Perry', 'Philip', 'Christina', 'Katie', 'Stephanie',
						 'Waller', 'Kim', 'Josh', 'Jacob', 'Van', 'Jonathan', 'Jon',
						 'Protik', 'Fahran', 'Maren', 'Dr. Mike', 'Shawn', 'Ben', 'Ed',
						 'Lisa', 'Kenny', 'Ramata', 'Chris', 'Brenden', 'Austin' 
						];
			let randomNumber =  Math.floor(Math.random() * names.length);
			return names[randomNumber]
		}


		this.randomNameOne = this.getRandomNames();
		this.randomNameTwo = this.getRandomNames();
	}
});
