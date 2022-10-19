module.exports = function menu (employees) {
  const inquirer = require('inquirer');
  const html_maker = require('./html_maker');
  const server = require('../server');
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'select',
        message: 'Please select an option to continue.',
        choices: [
          "View all departments",
          "View all roles",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role"
        ],
      },
    ])
    .then(answers => {
      if (answers.select === "View all departments") {
        
      } else if (answers.select === "View all roles") {
        
      } else if (answers.select === "Add departments") {

      } else if (answers.select === "Add roles") {

      } else if (answers.select === "Add employees") {

      } else {
        html_maker(employees);
      }
    });
}