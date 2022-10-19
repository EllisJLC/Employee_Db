INSERT INTO departments (dept_name)
VALUES  ("Main");

INSERT INTO roles (title, salary, dept_id)
VALUES  ("Manager",120000.00,1),
        ("Supervisor",90000.00,1),
        ("Accountant",85000.00,1);

INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES  ("Steve","Corren",1,2),
        ("Cindy","Short",1,3);