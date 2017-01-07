myApp.component('storyNew', {
    templateUrl: '/js/stories/storyIndexComponent/storyIndex.html',
    controller: function(storyService, $state) {
        this.story = {
            name   = null,
            animal = null,
            place  = null
        };
        this.create = function() {
            storyService.create(this.story)
            .then( res => {
                $state.go('storyIndex')
            })
    }
});