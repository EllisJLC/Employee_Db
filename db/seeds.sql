INSERT INTO departments (department_name)
VALUES  ("Head Office"),
        ("Accounting"),
        ("Developers");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Manager", 120000.00, 1),
        ("Supervisor", 110000.00, 1),
        ("Senior Accountant", 100000.00, 2),
        ("Junior Accountant", 85000.00, 2),
        ("Senior Developer", 110000.00, 3),
        ("Junior Developer", 80000.00, 3);

INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES  ("Steve", "Corren", NULL, 1),
        ("Cindy", "Short", 1, 3),
        ("Jason", "Tran", 1, 2),
        ("Annabel", "Pitt", NULL, 1),
        ("Milo", "Lozano", 4, 3),
        ("Katharine", "Roy", 4, 6),
        ("Charimaine", "McCray", 4, 5);