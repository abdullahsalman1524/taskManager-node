const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      // ye agy custom errorhandler ko request kar de ga.
      // if not present express apna chala de ga
      next(err);
    }
  }
}


module.exports = asyncWrapper


// asyncWrapper is a higher-order function that takes a function fn as an argument and returns a new asynchronous function.
// The returned function takes req, res, and next as arguments, which are standard parameters for Express.js middleware functions.
// Inside this function, try...catch is used to call the passed-in function fn with req, res, and next.
// If fn throws an error (e.g., if a database query fails), the error is caught and passed to the next middleware using next(err). This ensures that any asynchronous errors are handled properly and can be processed by an error-handling middleware.
