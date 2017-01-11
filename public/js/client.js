'use strict'; // Keeps our code clean

const myApp = angular.module('storyBook', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

	// If the user goes astray, redirect to /home
	$urlRouterProvider.otherwise('/index');

	$stateProvider
	.state('index', {
		url: '/index',
		template: `

	<h1> My Story Books </h1>
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Parent / Teacher Log In</span>
              <p>Please log your children in using your parent/teacher Username and password.</p>
              <p>If you haven't signed up yet, please follow the link below to create an account! </p>
              <login></login>
            </div>
            <div class="card-action">  
              <a ui-sref="signup">Sign Up!</a>
            </div>
          </div>
        </div>
      </div> 
		`
	})
	.state('signup', {
		url: '/signup',
		template: '<signup></signup>'
	})
	.state('storyIndex', {
		url: '/my-library',
		templateUrl: 'js/stories/storyIndexComponent/storyIndex.html',
		controller: 'indexCtrl',
		controllerAs: '$ctrl'
	})
	.state('storyNew', {
		url: '/new',
		templateUrl: 'js/stories/storyNewComponent/storyNew.html',
		controller: 'newCtrl',
		controllerAs: '$ctrl'
	})
	.state('storyShow', {
		url: '/show/:id',
		templateUrl: 'js/stories/storyShowComponent/storyShow.html',
		controller: 'showCtrl',
    controllerAs: '$ctrl'
	})
	.state('storyEdit', {
		url: '/edit/:id',
		templateUrl: 'js/stories/storyEditComponent/storyEdit.html',
		controller: 'editCtrl',
		controllerAs: '$ctrl'
	});
});

// Index controller
myApp.controller('indexCtrl', function(storyService, $stateParams, $state) {
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
});

// New Story Controller
myApp.controller('newCtrl', function(storyService, $state) {
	this.story = {
		title	 :  '',
		name     :  '',
		animal   :  '',
		place    :  ''
	};
	this.save = function() {
		console.log('about to save some shit...');
		storyService.create(this.story)
		.then( res => {
			console.log('this story got sent: ', this.story);
			$state.go('storyIndex');
		});
	};
});

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

// Edit Story Controller
myApp.controller('editCtrl', function(storyService, $state, $stateParams) {
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
});

// const myApp = angular.module('storyBook', ['ui.router']);
//
// myApp.config(function($stateProvider, $urlRouterProvider) {
//
// 	// If the user goes astray, redirect to /home
// 	$urlRouterProvider.otherwise('/index');
//
// 	$stateProvider
// 	.state('index', {
// 		url: '/index',
// 		template: `
// 		<h1> Welcome to our app </h1>
// 		<login></login>
// 		<p>If you haven't signed up yet, <a ui-sref="signup"> click here </a> to sign up</p>
// 		`
// 	})
// 	.state('signup', {
// 		url: '/signup',
// 		template: '<signup></signup>'
// 	})
// 	.state('storyIndex', {
// 		url: '/my-library',
// 		template: '<storyIndex></storyIndex>',
// 	})
// 	.state('storyNew', {
// 		url: '/new',
// 		template: '<storyNew></storyNew>'
// 	})
// 	.state('storyShow', {
// 		url: '/show/:id',
// 		templateUrl: 'js/stories/storyShowComponent/storyShow.html',
// 		controller: 'showCtrl',
//     controllerAs: '$ctrl'
// 	})
// 	.state('storyEdit', {
// 		url: '/edit/:id',
// 		template: '<storyEdit></storyEdit>'
// 	});
// });
