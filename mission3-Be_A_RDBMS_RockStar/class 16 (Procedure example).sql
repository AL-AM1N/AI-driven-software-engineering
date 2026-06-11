-- PROCEDURE

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

-----------------------------------------------
-- basic function 
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
------------------------------------------------
  
-- delete an employee using PROCEDURE
-- procedure
create procedure delete_emp_byid (emp_id int)
language plpgsql 
as
$$
  begin
  delete from employees where id = emp_id;
  end;
$$

-- calling delete procedure
call delete_emp_byid(4);

--------------------------------------------------

-- Question: employees table theke 'user given' department er jader salary avg salaryr theke kom tader salary 10% kore increase koro
--ans: using procedure:
create procedure increase_low_salary(department_name varchar(50))
language plpgsql
as 
$$
  declare
  avg_salary int;
  begin
  
  -- first step
  select avg(salary) into avg_salary from employees
  where department = department_name;

  -- second step
  update employees set salary = salary * 1.1
  where department = department_name and salary < avg_salary;
  end;
$$  


-- calling the procedure
call increase_low_salary('HR');

call increase_low_salary('IT');