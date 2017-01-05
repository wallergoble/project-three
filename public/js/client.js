var myApp = angular.module('storyBook', ['ui.router']);

myApp.config(function($stateProvider) {
	var storyState = {
		name: 'story',
		url: '/story',
		template: '<h1> hello from story template</h1>',
		controller: 'storyCtrl'
	}

	$stateProvider.state(storyState);
});