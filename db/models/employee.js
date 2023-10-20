const { DataTypes } = require("sequelize");
const sequelize = require("../dbConn");

const Employee = sequelize.define(
  "Employee",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    tableName: "Employees",
  }
);

module.exports = Employee;
