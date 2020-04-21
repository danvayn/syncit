const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const channelSchema = new Schema({
  title: {
    type: String,
    required: [true, 'This channel needs a name!']
  },
  description : {
    type: String,
    required: [true, 'This channel should have a description']
  },
  owner: {
    type: String,
    required: [true, 'This channel should have an owner']
  },

})

//create model for channel
const channel = mongoose.model('channel', channelSchema);

module.exports = channel;