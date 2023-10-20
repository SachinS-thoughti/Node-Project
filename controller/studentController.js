const Student = require("../db/models/student");
const fs = require("fs");
const {
  send200SuccessResponse,
  send400ValidationErrors,
  send400BadRequestResponse,
  send500ErrorResponse,
} = require("../helper/response.helper");

const addStudent = async (req, res) => {
  try {
    if (!req.files) {
      send400BadRequestResponse("Please select files", res);
    }
    const studentData = req.body;
    const files = req.files;
    const filePaths = {};
    const destinationFolder = "Documents/";
    for (const file of files) {
      const filePath = `${destinationFolder}${file.originalname}`;
      fs.writeFileSync(filePath, file.buffer);
      const fieldPath = `${file.fieldname}`;
      filePaths[fieldPath] = filePath;
    }

    const completeData = { ...studentData, ...filePaths };
    const student = await Student.create(completeData);
    send200SuccessResponse("Successfully Saved", student, res);
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      send400ValidationErrors(error, res);
    } else {
      send500ErrorResponse(res);
    }
  }
};

var getStudents = async (req, res) => {
  try {
    const data = await Student.findAll({});
    if (data.length === 0) {
      send404NotFoundResponse(res);
    }
    send200SuccessResponse("Students found", data, res);
  } catch (error) {
    send500ErrorResponse(res);
  }
};

module.exports = { addStudent, getStudents };
