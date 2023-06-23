const { constants } = require("../constants.js");
const asyncHanlder = require("express-async-handler");

const errorHanlder = (req, res, err, next) => {
  const statusCode = req.statusCode ? req.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed ",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED_ERROR:
      res.json({
        title: "Unauthorized Error!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN_ERROR:
      res.json({
        title: "Forbidden Error!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      break;
  }
};

module.exports = errorHanlder;
