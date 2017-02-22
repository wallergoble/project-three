'use strict'

var express = require('express');
var router = express.Router();


var newStory = require('../models/story').newStory;
var Story = require('../models/story').Model;

function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

// INDEX
// get all the story and return as JSON data
router.get('/', function(req, res, next) {
  // let currentUser = req.user;
  // console.log(currentUser._id);
  // console.log(stories._id);
    console.log('about to find some stories...');
    Story.find({user: req.user}).sort('-createdAt')
  .then(function(stories) {
      stories && stories.user && stories.user.equals(req.user._id);
      res.json(stories);
  })
  .catch(function(err) {
    return next(err);
  });
});

// NEW
router.post('/', function(req, res, next) {
  console.log('hello from post router');
  let story = newStory({
    title: req.body.title,
    name: req.body.name,
    animal: req.body.animal,
    place: req.body.place,
    user:  req.user
  });
  story.save()
  .then(function(savedStory) {
    console.log(savedStory);
    console.log(story);
    res.json(story);
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
    res.json(story);
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
    story.title = req.body.title;
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
           res.sendStatus(200);
       }
   });
});

module.exports = router;
