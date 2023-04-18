
const { Sequelize } = require('sequelize');



const { Employee } = require("../models/employees");

const createEmployeesAndManagers = async (employees, managers) => {
    const createdManagers = await Employee.bulkCreate(managers);
  
    const employeesWithManagerIds = employees.map((employee, index) => {
      return {
        ...employee,
        ManagerId: createdManagers[index].id,
      };
    });
  
    await Employee.bulkCreate(employeesWithManagerIds);
  };
  
  module.exports = {createEmployeesAndManagers};