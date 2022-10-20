require('dotenv').config();
require('console.table');

async function menu () {
  const inquirer = require('inquirer');
  // const update = require('../helpers/update');
  const answer = await inquirer.prompt([
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
    if (answer === 'View all departments' || answer === 'View all roles') {
      let table = answer.slice(9);
      view(table);
    } else if (answer === "Update an employee role"){
      update();
    } else {
      
    }
}

function view(table) {
  const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the movies_db database.`)
  );
  if (table === "roles") {
    db.query(`SELECT *
    FROM roles
    JOIN employees ON employees.role_id = roles.id;`, (error,result) => {
      if (error) {
        console.log(error)
      } else {
        console.log(result)
      }
    });
  } else {
    db.query(`SELECT * FROM departments`, (error,result) => {
      if (error) {
        console.log(error)
      } else {
        console.log(result)
      }
    });
  }
  menu();
}