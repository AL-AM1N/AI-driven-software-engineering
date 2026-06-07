create table 
  employe (id serial, name varchar(100), age int);

--1. Renaming table name
alter table employe
rename to employee

--2. Add a column
alter table employee
add column email varchar(50);

alter table employee
add column tel_num int, 
add column address varchar(50);

--3. Drop a column
alter table employee
drop column tel_num;

-- Renaming a column
alter table employee
rename column name to user_name;

-- Modifying constraint
alter table employee
alter column user_name type varchar(50);

-- Add constraint
alter table employee
alter column email set not null;

-- Drop constraint
alter table employee
alter column email drop not null;

-- Set default value 
alter table employee
alter column email set default 'test@gmail.com';

alter table employee
  alter column address set default 'saudi colony';

insert into employee (user_name, age, address) 
  values ('jamal', 35, 'denmark');

-- Remove default 
alter table employee
alter column email drop default;

-- Add constraint (table level constraint)
alter table employee
add constraint unique_employee_email unique(email);

alter table employee
add constraint pk_employee_id primary key(id);

-- Remove constraint (table level constraint)
alter table employee
drop constraint unique_employee_email; 