/* eslint-disable no-bitwise */
const { response } = require('../../util/response-query');

module.exports.postIdValidationMiddleware = async (req, res, next) => {
  try {
    const { id: query_id } = req.query;
    const { id: body_id } = req.body;
    if (!query_id && !body_id) throw Error('Post ID is required');
    return next();
  } catch (error) {
    return response(res, 400, 'ERROR', error.message);
  }
};
