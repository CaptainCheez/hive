const mongoose = require('mongoose');

const ideaAuthor = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
});

const ideaSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  author:{
    type: ideaAuthor,
    required: true
  },
  body:{
    type: String,
    required: true
  }
});

const Idea = module.exports = mongoose.model('Idea', ideaSchema);