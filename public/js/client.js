'use strict'; // Keeps our code clean

const myApp = angular.module('storyBook', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

	// If the user goes astray, redirect to /home
	$urlRouterProvider.otherwise('/index');

	$stateProvider

	// Landing page, primarily filled with login component
	.state('index', {
		url: '/index',
		template: `<login></login>`
	})

	// Sign up view
	.state('signup', {
		url: '/signup',
		template: '<signup></signup>'
	})

	// Shows all of a user's stories
	.state('storyIndex', {
		url: '/my-library',
		template: '<story-index></story-index>',
		onEnter: function(Auth, $state) {
            if (!Auth.isLoggedIn()) {
                $state.go('index', {});
            }
        }
	})

	// Form to create a new story
	.state('storyNew', {
		url: '/new',
		template: '<story-new></story-new>',

        onEnter: function(Auth, $state){
            if(!Auth.isLoggedIn()) {
                $state.go('index',{});
            }
        }
	})

	// Show a singular story
	.state('storyShow', {
		url: '/show/:id',
		template: '<story-show></story-show>',
        onEnter: function(Auth, $state){
            if(!Auth.isLoggedIn()) {
                $state.go('index',{});
            }
        }
	})

	// Edit a story
	.state('storyEdit', {
		url: '/edit/:id',
		template: '<story-edit></story-edit>',
        onEnter: function(Auth, $state){
            if(!Auth.isLoggedIn()) {
                $state.go('index',{});
            }
        }


	});
});
