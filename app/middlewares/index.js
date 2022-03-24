const { getPostMiddleware } = require('./get-post-middleware');
const { createPostMiddleware } = require('./create-post-middleware');
const { updatePostMiddleware } = require('./update-post-middleware');
const { deletePostMiddleware } = require('./delete-post-middleware');
const { responseMiddleware } = require('./response/response-middleware');
const { postValidationParamsMiddleware } = require('./validations/post-validation-params-middleware');
const { postIdValidationMiddleware } = require('./validations/post-id-validation-middleware');

module.exports.getPosts = [
  getPostMiddleware,
  responseMiddleware
];

module.exports.postPosts = [
  postValidationParamsMiddleware,
  createPostMiddleware,
  responseMiddleware
];

module.exports.updatePosts = [
  postIdValidationMiddleware,
  updatePostMiddleware,
  responseMiddleware
];

module.exports.deletePosts = [
  postIdValidationMiddleware,
  deletePostMiddleware,
  responseMiddleware
];
