const { createPostController } = require('../controllers/create-post-controller');

module.exports.createPostMiddleware = async (req, res, next) => {
  try {
    const { ...params } = req.body;
    const result = await createPostController(params);
    req.response = result;
    return next();
  } catch (error) {
    const response = { status: 'Error', message: error };
    res.status(500).json(response);
  }
  return next();
};
