const { getPostController } = require('../controllers/get-post-controller');

module.exports.getPostMiddleware = async (req, res, next) => {
  try {
    const { id } = req.query;
    const posts = await getPostController(id);
    req.response = posts;
    return next();
  } catch (error) {
    const response = { status: 'Error', message: error.message };
    return res.status(500).json(response);
  }
};
