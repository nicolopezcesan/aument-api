const Router = require('express').Router;
const {
  getPosts,
  postPosts,
  updatePosts,
  deletePosts,
} = require('../middlewares');

const router = Router();

const posts = router.route('/posts');
posts.get(getPosts);
posts.post(postPosts);
posts.put(updatePosts);
posts.delete(deletePosts);

module.exports = router;
