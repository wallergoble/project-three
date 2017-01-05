var myApp = angular.module('storyBook', ['ui.router']);

myApp.config(function($stateProvider) {


    var storyState = {
        name: 'start',
        url: 'storyHome/start',
        templateUrl: 'home/storyHome.html',
        controller:'storyCtrl',
        controllerAs: '$ctrl'
    }

    var aboutState = {
        name: 'about',
        url: 'about/about',
        templateUrl: '/about/about.html',
        controller:'aboutCtrl',
        controllerAs: '$ctrl'

    }

    $stateProvider.state(storyState);
    $stateProvider.state(aboutState);
});