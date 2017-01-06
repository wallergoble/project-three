myApp.service('storyService', function($http) {

  // Get all of the stories
  this.getStories = function() {
    return $http.get('/api/stories');
  };

  // Get a single story by ID
  this.getStory = function(id) {
    return $http.get('/api/stories/' + id);
  };

  // Create a new story
  this.create = function(story) {
    return $http.post('/api/stories', story);
  };

  // Edit a single story by ID
  this.update = function(story) {
    return $http.put('/api/stories/' + story._id, story);
  };

  // Delete a single story by ID
  this.delete = function(story) {
    return $http.delete('/stories/' + story._id);
  };
});
