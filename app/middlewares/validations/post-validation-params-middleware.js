/* eslint-disable no-bitwise */
const { response } = require('../../util/response-query');

module.exports.postValidationParamsMiddleware = async (req, res, next) => {
  try {
    const { image, tag, text, title } = req.body;

    if (!image) {
      throw Error('Image field is required');
    }

    if (!tag) {
      throw Error('Tag field is required');
    }

    if (!text) {
      throw Error('Text field is required');
    }

    if (!title) {
      throw Error('Title field is required');
    }
  } catch (error) {
    return response(res, 400, 'Error', error.message);
  }
  return next();
};
