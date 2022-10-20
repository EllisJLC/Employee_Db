console.log("Welcome to the developer database!");
require('dotenv').config();
require('console.table');
const mysql = require('mysql2');
const inquirer = require('inquirer');
menu();

async function menu () {
  // const update = require('../helpers/update');
  const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'select',
        message: 'Please select an option to continue.',
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add department",
          "Add role",
          "Add employee",
          "Update an employee role"
        ],
      },
    ])
    if (answer.select === 'View all departments' || answer.select === 'View all roles') {
      let table = answer.select.slice(9);
      view(table);
    } else if (answer.select === "Update an employee role"){
      update();
    } else {
      let newEntry = answer.select.slice(4);
      add(newEntry);
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
    JOIN employees ON employees.role_id = roles.role_id;`, (error,result) => {
      if (error) {
        console.log(error)
      } else {
        console.table(result)
      }
    })
    menu();
  } else if (table === "departments") {
    db.query(`SELECT * FROM departments`, (error,result) => {
      if (error) {
        console.log(error)
      } else {
        console.table(result)
      }
    });
    menu();
  }
}

async function update() {
  const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the movies_db database.`)
  );
  const employeeUpdate = await inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "Please input employee id to edit"
    }, {
      type: "list",
      name: "option",
      choices: [
        "first_name",
        "last_name",
        "role_id",
        "manager_id"
      ]
    }, {
      type: "input",
      name: "newtext",
      message: "Input new value"
    }
  ]);
  console.log(employeeUpdate)
  menu();
}

async function add(newEntry) {
  const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    console.log(`Connected to the movies_db database.`)
  );
  if (newEntry === "employee") {
    const newEmployee = await inquirer.prompt([
      {
        type: "input",
        name: "first_name",
        message: "Input employee's first name"
      }, {
        type: "input",
        name: "last_name",
        message: "Input employee's last name"
      }, {
        type: "input",
        name: "manager_id",
        message: "Input employee's manager's id"
      }, {
        type: "input",
        name: "role_id",
        message: "Input employee's role id"
      }
    ]);
    db.query(`INSERT INTO employees (first_name, last_name, manager_id, role_id) VALUES (${newEmployee.first_name}, ${newEmployee.last_name}, ${newEmployee.manager_id}, ${newEmployee.role_id})`, (error,result) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Successfully added employee!")
      }
    });
    menu();
  } else if (newEntry === "role") {
    const newRole = await inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "Input role title:"
      }, {
        type: "input",
        name: "salary",
        message: "Input role salary (integer):"
      }, {
        type: "input",
        name: "department_id",
        message: "Input department id:"
      }
    ]);
    db.query(`INSERT INTO roles (title, salary, dept_id) VALUES (${newRole.title}, ${newRole.salary}, ${newRole.dept_id})`, (error,result) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Successfully added role!")
      }
    });
    menu();
  } else {
    const newDept = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Name of department: "
    }
    ])
    db.query(`INSERT INTO ROLES (dept_name) VALUES (${newDept.name})`, (error,result) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Successfully added department!")
      }
    });
  }
  
}