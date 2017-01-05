var myApp = angular.module('storyBook', ['ui.router']);

myApp.config(function($stateProvider) {
	var storyState = {
		name: 'story',
		url: '/story',
		templateUrl: 'js/stories/story.html',
		controller: 'storyCtrl'
	}
	
	$stateProvider.state(storyState);
});