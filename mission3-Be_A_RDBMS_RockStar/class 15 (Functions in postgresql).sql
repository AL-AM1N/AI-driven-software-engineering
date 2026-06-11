-- Functions in PostgreSQL
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

-- count function
CREATE FUNCTION emp_count () returns int language sql AS $$
  select count(*) from employees  
$$
-- calling the count function
SELECT
    emp_count ();





-- DELETE an employee using employee id
create function dlt_employee_by_id(emp_id int)
returns void
language sql
  as
$$
  delete from employees where id = emp_id  
$$

-- calling delete function
select dlt_employee_by_id(5)