'use strict'; // Keeps our code clean

const myApp = angular.module('storyBook', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

	// If the user goes astray, redirect to /home
	$urlRouterProvider.otherwise('/index');

	$stateProvider
	.state('index', {
		url: '/index',
		template: `
		<h1> Welcome to our app </h1>
		<login></login>
		<p>If you haven't signed up yet, <a ui-sref="signup"> click here </a> to sign up</p>
		`
	})
	.state('signup', {
		url: '/signup',
		template: '<h1> hi </h1><signup></signup>'
	})
	.state('storyIndex', {
		url: '/my-library',
		template: '<storyIndex></storyIndex>'
	})
	.state('storyNew', {
		url: '/new',
		template: '<storyNew></storyNew>'
	})
	.state('storyShow', {
		url: '/show/:id',
		template: '<storyShow></storyShow>'
	})
	.state('storyEdit', {
		url: '/edit/:id',
		template: '<storyEdit></storyEdit>'
	});
});
