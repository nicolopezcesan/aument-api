const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  image: { type: String, required: true },
  tag: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('post', postSchema, 'post');
