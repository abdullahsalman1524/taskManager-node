class CustomApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (message, statusCode) => {
  return new CustomApiError(message, statusCode);
};


module.exports = {createCustomError, CustomApiError};
