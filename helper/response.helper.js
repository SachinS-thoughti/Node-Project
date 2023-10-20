const send400ValidationErrors = (error, res) => {
  const errorObj = {};
  error.errors.forEach((e) => {
    errorObj[e.path] = e.message;
  });
  return res.status(400).json({
    code: 400,
    message: "Validation Errors.",
    error: "Validation Errors.",
    data: errorObj,
  });
};

const send200SuccessResponse = (message, data, res) => {
  return res.status(200).json({ code: 200, message, error: null, data });
};

const send400BadRequestResponse = (message, res) => {
  return res
    .status(400)
    .json({ code: 400, message, error: message, data: null });
};

const send404NotFoundResponse = (res) => {
  return res.status(404).json({
    code: 404,
    message: "No data found.",
    error: "No data found.",
    data: null,
  });
};

const send500ErrorResponse = (res) => {
  return res.status(500).json({
    code: 500,
    message: "An unexpected error occurred.",
    error: "An unexpected error occurred.",
    data: null,
  });
};
module.exports = {
  send400ValidationErrors,
  send200SuccessResponse,
  send400BadRequestResponse,
  send404NotFoundResponse,
  send500ErrorResponse,
};
