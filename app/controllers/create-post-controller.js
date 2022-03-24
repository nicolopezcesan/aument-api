const Post = require('../models/post-model');

module.exports.createPostController = async (params) => {
  try {
    const newPost = new Post(params);
    const result = await newPost.save();
    return result;
  } catch (error) {
    throw error;
  }
};
