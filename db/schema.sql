DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
  department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(100)
);

CREATE TABLE roles (
  role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50),
  salary DECIMAL,
  dept_id INT NOT NULL,
  FOREIGN KEY (dept_id)
  REFERENCES departments(department_id)
  ON DELETE CASCADE
);

CREATE TABLE employees (
  employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  manager_id INT,
  role_id INT,
  FOREIGN KEY (role_id)
  REFERENCES roles(role_id)
  ON DELETE CASCADE
);