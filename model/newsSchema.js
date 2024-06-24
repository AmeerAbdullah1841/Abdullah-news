const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newslistSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  create_time: {
    type: Date,
    default: Date.now,
  },
  image_url: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Newslist = mongoose.model("Newslist", newslistSchema);

module.exports = Newslist;
