var mongoose = require('mongoose');
//NEED TO Add key/value for story title
var StorySchema = new mongoose.Schema({
  title:          { type: String,  required: true },
  name:           { type: String,  required: true },
  animal:         { type: String,  required: true },
  place:          { type: String,  required: true }
  },
  { timestamps: true }  // createdAt, updatedAt
);

module.exports = mongoose.model('Story', StorySchema);
