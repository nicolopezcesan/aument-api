const { type, sortByData } = require('../../util/util-query');
const { response } = require('../../util/response-query');
const { entityIdValidate } = require('../../util/validation-utils');

module.exports.getReviewByEntityValidation = async (req, res, next) => {
  const { entity_id, sortBy, offset, limit } = req.query;

  if (entityIdValidate(entity_id)) {
    return response(res, 400, 'Error', 'entity_id is required');
  }

  if (sortBy && (!type(sortBy, 'string'))) {
    return response(res, 400, 'Error', 'sortBy incorrect');
  }

  if (offset && (isNaN(offset) || offset < 0)) {
    return response(res, 400, 'Error', 'offset incorrect');
  }

  if (limit && (isNaN(offset) || (limit < 1 || limit > 100))) {
    return response(res, 400, 'Error', 'limit incorrect');
  }

  const sortByFilter = sortByData(sortBy);

  req.queryParams = {
    entity_id: parseInt(entity_id, 10),
    sortByFilter,
    offset,
    limit
  };
  return next();
};
