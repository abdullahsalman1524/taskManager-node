const { customApiError } = require("../error/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  res.status(500).json({ message: err.message });
};

module.exports = errorHandlerMiddleware;
