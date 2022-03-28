const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, default: Date.now },
  tag: {
    label: { type: String },
    color: { type: String },
  },
});

module.exports = mongoose.model('post', postSchema, 'post');
