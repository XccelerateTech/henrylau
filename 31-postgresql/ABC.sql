-- A 
CREATE TABLE stock (
    id SERIAL primary key,
    fruit_name VARCHAR(255) not null,
    descriptions VARCHAR(255),
    quantity INTEGER,
    price DECIMAL
);

-- B
DROP TABLE stock;

-- C
-- Table
CREATE TABLE employee (
    id SERIAL primary key,
    first_name VARCHAR,
    last_name VARCHAR,
    salary DECIMAL,
    contract_length INTEGER
);

-- Rows
INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Steven', 'King', 10000, 3);
INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Neena', 'Kochhar', 8000, 2);
INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('David', 'Austin', 12000, 2);
INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Nancy', 'Greenberg', 3000, 1);

-- Query
-- 1)
SELECT first_name, last_name FROM employee WHERE salary > 5000 AND salary < 11000;
-- 2)
SELECT * FROM employee WHERE contract_length < 2;
-- 3)
INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Henry', 'Lau', 20000, 5);
INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Johnny', 'Boy', 17500, 3);
-- 4)
UPDATE employee SET salary = '8000', contract_length = '2' WHERE first_name = 'Nancy';
-- 5)
SELECT * From employee ORDER BY salary DESC;