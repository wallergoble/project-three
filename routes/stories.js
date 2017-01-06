var express = require('express');
var router = express.Router();


var Story = require('../models/story');

function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

// INDEX
// get all the story and return as JSON data
router.get('/', function(req, res, next) {
  console.log('about to find some stories...');
  Story.find().sort('-createdAt')
  .then(function(stories) {
    res.json({ stories: stories });
  })
  .catch(function(err) {
    return next(err);
  });
});

// CREATE
router.post('/', function(req, res, next) {
  Story.create(req.body)
  .then(function(savedStory) {
    res.json({ story: savedStory });
  })
  .catch(function(err) {
    return next(err);
  });
});

// SHOW
// return data for a single story as JSON
router.get('/:id', function(req, res, next) {
  Story.findById(req.params.id)
  .then(function(story) {
    if (!story) return next(makeError(res, 'Document not found', 404));
    res.json({ story: story });
  })
  .catch(function(err) {
    return next(err);
  });
});

// UPDATE
router.put('/:id', function(req, res, next) {
  Story.findById(req.params.id)
  .then(function(story) {
    if (!story) return next(makeError(res, 'Document not found', 404));
    // if (!req.user._id.equals(story.user)) return next(makeError(res, 'Unauthorized', 401));
    story.name = req.body.name;
    story.animal = req.body.animal;
    story.place = req.body.place;
    return story.save();
  })
  .then(function(story) {
    res.json(story);
  }, function(err) {
    return next(err);
  });
});

// DELETE
router.delete('/:id', function(req, res, next) {
   console.log('Trying to delete story with id:', req.params.id);
   Story.findByIdAndRemove(req.params.id, function(err) {
       if(err){
           return next(err);
       } else {
           res.redirect('/');
       }
   });
});

module.exports = router;
