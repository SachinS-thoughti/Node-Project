const User = require("../db/models/users");
const bcrypt = require("bcrypt");
const {
  send400ValidationErrors,
  send200SuccessResponse,
  send404NotFoundResponse,
  send500ErrorResponse,
} = require("../helper/response.helper");

var addUser = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    let userData = req.body;
    const user = await User.create(userData);
    send200SuccessResponse("Successfully Saved", user, res);
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      send400ValidationErrors(error, res);
    } else {
      send500ErrorResponse(res);
    }
  }
};

var getUsers = async (req, res) => {
  try {
    const data = await User.findAll({});
    if (data.length === 0) {
      send404NotFoundResponse(res);
    }
    send200SuccessResponse("Users found", data, res);
  } catch (error) {
    send500ErrorResponse(res);
  }
};

var getUserById = async (req, res) => {
  try {
    const data = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!data) {
      send404NotFoundResponse(res);
    }
    send200SuccessResponse("User data found", data, res);
  } catch (error) {
    send500ErrorResponse(res);
  }
};

var updateUser = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    let updatedData = req.body;
    const user = await User.update(updatedData, {
      where: {
        id: req.params.id,
      },
    });

    send200SuccessResponse("User updated successfully", "", res);
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      send400ValidationErrors(error, res);
    } else {
      send500ErrorResponse(res);
    }
  }
};

var deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    send200SuccessResponse("User deleted successfully", "", res);
  } catch (error) {
    send500ErrorResponse(res);
  }
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
