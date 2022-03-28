/* eslint-disable no-underscore-dangle */
const Post = require('../models/post-model');

module.exports.updatePostMiddleware = async (req, res, next) => {
  try {
    // validar si intento editar un post que no existe
    const post = req.body;
    await Post.updateOne({ _id: post.id }, post);
    req.response = 'Post has been updated';
    return next();
  } catch (error) {
    const response = { status: 'Error', message: error };
    res.status(500).json(response);
  }
  return next();
};
