const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A post must have a name"],
    trim: true,
    maxlength: [
      1000,
      "A post title must have less or equal to 1000 characters",
    ],
    minlength: [1, "A post title must have more than 1 character"],
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
    maxlength: [
      100000,
      "A post content must have less or equal to 10000 characters",
    ],
    minlength: [1, "A post content must have more or equal than 1 character"],
  },
  timeToRead: {
    type: Number,
  },
  publishDate: {
    type: Date,
    default: Date.now(),
  },
});

const Post = new mongoose.model("Post", postSchema);

module.exports = Post;
