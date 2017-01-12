'use strict'; // Keeps our code clean

const myApp = angular.module('storyBook', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

	// If the user goes astray, redirect to /home
	$urlRouterProvider.otherwise('/index');

	$stateProvider
	.state('index', {
		url: '/index',
		template: `<login></login>`
	})
	.state('signup', {
		url: '/signup',
		template: '<signup></signup>'
	})
	.state('storyIndex', {
		url: '/my-library',
		template: '<story-index></story-index>'
	})
	.state('storyNew', {
		url: '/new',
		template: '<story-new></story-new>'
	})
	.state('storyShow', {
		url: '/show/:id',
		template: '<story-show></story-show>'
	})
	.state('storyEdit', {
		url: '/edit/:id',
		template: '<story-edit></story-edit>'
	});
});
