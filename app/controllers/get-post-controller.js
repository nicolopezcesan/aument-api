const Post = require('../models/post-model');

module.exports.getPostController = async (_id) => {
  try {
    const filter = (_id) ? { _id } : {};
    const result = await Post.find(filter).lean();
    return result;
  } catch (error) {
    throw error;
  }
};
