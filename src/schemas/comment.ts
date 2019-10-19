const commentAuthor = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
});

const commentSchema = mongoose.Schema({
  body:{
    type: String,
    required: true
  },
  date:{
    type: commentAuthor,
    required: true
  },
  postId:{
    type: String,
    required: true
  }
});

const IdeaComment = module.exports = mongoose.model('IdeaComment', commentSchema);