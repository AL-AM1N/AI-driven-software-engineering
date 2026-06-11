-- create table
CREATE TABLE employees (
    id serial PRIMARY KEY,
    name varchar(50),
    department varchar(50),
    salary int
);

-- insert data into employees table
INSERT INTO
    employees (name, department, salary)
VALUES
    ('Alice Johnson', 'IT', 75000),
    ('Bob Smith', 'HR', 62000),
    ('Carol Davis', 'IT', 58000),
    ('David Wilson', 'Finance', 71000),
    ('Emma Brown', 'HR', 65000);

-- find the highest salary
SELECT
    max(salary) AS max_salary
FROM
    employees;

--find which employee gets the highest salary
SELECT
    *
FROM
    employees
WHERE
    salary = (
        SELECT
            max(salary) AS max_salary
        FROM
            employees
    );

-- find employees who earn more than the average salary
SELECT
    *
FROM
    employees
WHERE
    salary > (
        SELECT
            avg(salary)
        FROM
            employees
    );

-- name of the employee who gets the highest salary in HR department
SELECT
    *
FROM
    employees
WHERE
    salary = (
        SELECT
            max(salary)
        FROM
            employees
        WHERE
            department = 'HR'
    )