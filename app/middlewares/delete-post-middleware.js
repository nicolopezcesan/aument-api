const Post = require('../models/post-model');

module.exports.deletePostMiddleware = async (req, res, next) => {
  try {
    const { id } = req.query;
    const result = await Post.deleteOne({ _id: id });
    if (result.deletedCount < 1) return res.status(404).json({ status: 'ERROR', message: 'Post ID does not exist' });
    req.response = 'Post has been deleted';
    return next();
  } catch (error) {
    const response = { status: 'Error', message: error };
    res.status(500).json(response);
  }
  return next();
};
