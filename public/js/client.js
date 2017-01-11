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
		templateUrl: 'js/stories/storyIndex/storyIndex.html',
		controller: 'indexCtrl',
		controllerAs: '$ctrl'
	})
	.state('storyNew', {
		url: '/new',
		templateUrl: 'js/stories/storyNew/storyNew.html',
		controller: 'newCtrl',
		controllerAs: '$ctrl'
	})
	.state('storyShow', {
		url: '/show/:id',
		templateUrl: 'js/stories/storyShow/storyShow.html',
		controller: 'showCtrl',
    controllerAs: '$ctrl'
	})
	.state('storyEdit', {
		url: '/edit/:id',
		templateUrl: 'js/stories/storyEdit/storyEdit.html',
		controller: 'editCtrl',
		controllerAs: '$ctrl'
	});
});
