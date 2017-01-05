const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Story = require('./models/story.js');

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}
else {
  mongoose.connect('mongodb://localhost/stories');
}
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!");
});

// our script will not exit until we have disconnected from the db.
function quit() {
  mongoose.disconnect();
  console.log('\nQuitting!');
}

// a simple error handler
function handleError(err) {
  console.error('ERROR:', err);
  quit();
  return err;
}

// Seed some stuff here
console.log('Removing old stories');
Story.remove({})
.then(function() {
  console.log('Creating some new stories...');
  const storyOne = new Story({ name: 'Christina', animal: 'alligator', place: 'hell' });
  console.log(storyOne);
  const storyTwo = new Story({ name: 'Waller', animal: 'cat', place: 'beach' });
  const storyThree = new Story({ name: 'Snuggles', animal: 'octopus', place: 'swagland' });
  return Story.create([storyOne, storyTwo, storyThree]);
})
.then(function(savedStories) {
  console.log('Just saved', savedStories.length, 'stories');
  return Story.find({});
})
.then(function(allStories) {
  console.log('Printing all stories:');
  allStories.forEach(function(movie) {
    console.log(movie);
  });
  quit();
})
.catch(handleError);
