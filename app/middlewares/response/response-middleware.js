module.exports.responseMiddleware = async (req, res) => {
  res.status(200).json({
    status: 'OK',
    data: req.response
  });
};
