const Mongoose = require('mongoose');
const chatSchema = new Mongoose.Schema({
  chatName: {
    type: String,
    trim: true,
  },
  isGroupChat: {
    type: Boolean,
    default: false,
  },
  users: {
    type: String,
    required: true,
  },
  latestMessage: {
    type: Number,
    required: true
  },
  groupAdmin: {
    type: String,
    required: true
  },

});

module.exports = Mongoose.model('chat', chatSchema);
