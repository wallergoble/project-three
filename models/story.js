var mongoose = require('mongoose');

var StorySchema = new mongoose.Schema({
  title:          { type: String },
  name:           { type: String,  required: true },
  animal:         { type: String,  required: true },
  place:          { type: String,  required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref:'User'}// added in user for passport and mongoose to use to match users to their stories
    },
  { timestamps: true }  // createdAt, updatedAt
);

module.exports = mongoose.model('Story', StorySchema);
