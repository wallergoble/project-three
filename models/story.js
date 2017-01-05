var mongoose = require('mongoose');
//NEED TO Add key/value for story name
var StorySchema = new mongoose.Schema({
  name:           { type: String,  required: true },
  animal:         { type: String,  required: true },
  place:          { type: String,  required: true }
  },
  { timestamps: true }  // createdAt, updatedAt
);

module.exports = mongoose.model('Story', StorySchema);
