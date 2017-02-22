var mongoose = require('mongoose');
//NEED TO Add key/value for story title
var StorySchema = new mongoose.Schema({
  title:          { type: String },
  name:           { type: String,  required: true },
  animal:         { type: String,  required: true },
  place:          { type: String,  required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref:'User'},// added in user for passport and mongoose to use to match users to their stories
  friendOne:      { type: String,  required: true }, 
  friendTwo:      { type: String,  required: true }, 
},
  { timestamps: true }  // createdAt, updatedAt
);

const Model = mongoose.model('Story', StorySchema);

const newStory = ( story ) =>
  new Model(Object.assign({}, story, {
    friendOne: randomName(),
    friendTwo: randomName(),
  }))

const randomName = () => names[ ( Math.random() * names.length ) >> 0 ]

let names = ['Perry', 'Philip', 'Christina', 'Katie', 'Stephanie',
  'Waller', 'Kim', 'Josh', 'Jacob', 'Van', 'Jonathan', 'Jon',
  'Protik', 'Fahran', 'Maren', 'Dr. Mike', 'Shawn', 'Ben', 'Ed',
  'Lisa', 'Kenny', 'Ramata', 'Chris', 'Brenden', 'Austin' 
];


module.exports = {
  Model,
  newStory,
}




