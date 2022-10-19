const menu = require('./src/menu');

const server = function server(answer) {
  const app = require('express');
  const api = require('./routes/index');
  const menu = require("./src/menu");
  require('dotenv').config();

  const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: process.env.SQLPW,
      database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
  );

  if (answer === "View all departments" || answer === "View all roles") {
    queryTable = answer.slice(9);
    app.get(`/api/${queryTable}`,(req,res) => {
      db.query(`SELECT * FROM ${queryTable}`, (error,result) => {
      if (error) {
        console.log(error)
      } else {
        res.json(result)
      }
      })
    })
    menu();    
  } else if (answer === "Add departments" || answer === "Add roles" || answer === "Add employees") {

  } else {
    console.log("Please enter a valid answer");
  }
}