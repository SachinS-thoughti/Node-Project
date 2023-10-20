const Employee = require("./models/employee");
const User = require("./models/users");
const Student = require("./models/student");

Employee.sync({ force: false });
User.sync({ force: false });
Student.sync({ force: false });
