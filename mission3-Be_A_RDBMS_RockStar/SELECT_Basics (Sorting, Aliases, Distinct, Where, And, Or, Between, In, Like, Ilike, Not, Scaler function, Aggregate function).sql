-- # create table 
CREATE TABLE students3 (
  student_id serial PRIMARY KEY,
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  age int,
  grade char(2),
  course varchar(50),
  email varchar(100) UNIQUE,
  dob date,
  blood_group varchar(5),
  country varchar(50)
);

-- # INSERT data
INSERT INTO students3
(first_name, last_name, age, grade, course, email, dob, blood_group, country)
VALUES
('John', 'Smith', 20, 'A+', 'Computer Science', 'john.smith1@example.com', '2005-03-15', 'O+', 'USA'),
('Emma', 'Johnson', 22, 'A', 'Mathematics', 'emma.johnson2@example.com', '2003-07-21', 'A+', 'Canada'),
('Liam', 'Williams', 19, 'B+', 'Physics', 'liam.williams3@example.com', '2006-01-10', 'B+', 'UK'),
('Olivia', 'Brown', 21, 'A-', 'Chemistry', 'olivia.brown4@example.com', '2004-09-18', 'AB+', 'Australia'),
('Noah', 'Jones', 23, 'B', 'Biology', 'noah.jones5@example.com', '2002-05-25', 'O-', 'USA'),
('Ava', 'Garcia', 20, 'A+', 'Engineering', 'ava.garcia6@example.com', '2005-02-12', 'A-', 'Mexico'),
('William', 'Miller', 24, 'C+', 'Economics', 'william.miller7@example.com', '2001-11-30', 'B-', 'Germany'),
('Sophia', 'Davis', 18, 'A', 'English', 'sophia.davis8@example.com', '2007-06-05', 'O+', 'France'),
('James', 'Rodriguez', 22, 'B+', 'History', 'james.rodriguez9@example.com', '2003-04-17', 'AB-', 'Spain'),
('Isabella', 'Martinez', 21, 'A-', 'Political Science', 'isabella.martinez10@example.com', '2004-08-29', 'A+', 'Italy'),

('Benjamin', 'Hernandez', 20, 'B', 'Computer Science', 'benjamin.hernandez11@example.com', '2005-10-14', 'O+', 'Brazil'),
('Mia', 'Lopez', 19, 'A+', 'Statistics', 'mia.lopez12@example.com', '2006-12-01', 'B+', 'Argentina'),
('Lucas', 'Gonzalez', 23, 'C', 'Accounting', 'lucas.gonzalez13@example.com', '2002-03-20', 'A-', 'Chile'),
('Charlotte', 'Wilson', 22, 'B+', 'Marketing', 'charlotte.wilson14@example.com', '2003-09-09', 'AB+', 'USA'),
('Henry', 'Anderson', 21, 'A', 'Finance', 'henry.anderson15@example.com', '2004-01-22', 'O-', 'Canada'),
('Amelia', 'Thomas', 20, 'A+', 'Psychology', 'amelia.thomas16@example.com', '2005-07-13', 'A+', 'UK'),
('Alexander', 'Taylor', 24, 'B-', 'Law', 'alexander.taylor17@example.com', '2001-04-04', 'B-', 'Australia'),
('Harper', 'Moore', 19, 'A', 'Medicine', 'harper.moore18@example.com', '2006-08-27', 'O+', 'India'),
('Michael', 'Jackson', 22, 'B+', 'Nursing', 'michael.jackson19@example.com', '2003-02-11', 'AB-', 'South Africa'),
('Evelyn', 'Martin', 18, 'A-', 'Architecture', 'evelyn.martin20@example.com', '2007-05-16', 'A-', 'New Zealand'),

('Daniel', 'Lee', 21, 'B', 'Computer Science', 'daniel.lee21@example.com', '2004-10-31', 'O+', 'Singapore'),
('Abigail', 'Perez', 20, 'A+', 'Data Science', 'abigail.perez22@example.com', '2005-01-19', 'B+', 'Malaysia'),
('Matthew', 'Thompson', 23, 'C+', 'Mechanical Engineering', 'matthew.thompson23@example.com', '2002-06-28', 'AB+', 'Germany'),
('Emily', 'White', 22, 'B+', 'Civil Engineering', 'emily.white24@example.com', '2003-12-08', 'A+', 'Norway'),
('Joseph', 'Harris', 19, 'A', 'Software Engineering', 'joseph.harris25@example.com', '2006-03-24', 'O-', 'Sweden'),
('Elizabeth', 'Sanchez', 21, 'A-', 'Information Systems', 'elizabeth.sanchez26@example.com', '2004-11-15', 'B-', 'Bangladesh'),
('David', 'Clark', 20, 'B+', 'Artificial Intelligence', 'david.clark27@example.com', '2005-09-07', 'AB-', 'Japan'),
('Sofia', 'Ramirez', 24, 'A', 'Cyber Security', 'sofia.ramirez28@example.com', '2001-07-26', 'A+', 'South Korea'),
('Christopher', 'Lewis', 22, 'B', 'Business Administration', 'christopher.lewis29@example.com', '2003-05-03', 'O+', 'UAE'),
('Grace', 'Walker', 18, 'A+', 'Graphic Design', 'grace.walker30@example.com', '2007-02-14', 'AB+', 'Netherlands');

-- # using SELECT
select * from students3;

select first_name, age from students3;

-- # column Alias
select first_name as "First Name", age as user_age from students3;

-- # Sorting
select student_id, first_name, age, country from students3 order by age asc; 

select student_id, first_name, age, country from students3 order by student_id desc; 

-- # Distinct: it will remove repeatitive value and give us unique value
select distinct country from students3; 



-- # Filtering:
-- "=" operator
-- Question: Select students from the USA
select * from students3
where country = 'USA';

select first_name, last_name, age, country from students3
where country = 'USA';


-- Question: Select students with 'A' grade 
select * from students3
where grade = 'A';

-- Question: Select students with a specific blood group ('A+')
select * from students3 
where blood_group = 'A+';


-- "OR" Operator
-- Select students from the USA or from Bangladesh
select first_name, country, age from students3 
where country = 'USA' or country = 'Bangladesh';


-- Select students with a grade of 'A' or 'B' in Mathematics or Computer Science
select first_name, grade, course, country from students3
where (grade = 'A' or grade = 'B') and (course = 'Mathematics' or course = 'Computer Science');


-- And operator
-- Select students from the USA the age is 20
select first_name, country, age from students3
where country = 'USA' and age = 20;


-- Select students from the USA or Canada and the age is 22;
select first_name, age, course, country from students3
where (country = 'USA' or country = 'Canada') and age = 22;



-- # Comparison Operators
-- Select students older than 20 or equal to 20
select * from students3
where age >= 20;

-- Select all country except USA (OLD VERSION)
select * from students3
where country != 'USA';

-- Select all country except USA (NEW VERSION)
select first_name, country from students3
where country <> 'USA';


-- # BETWEEN operator
-- Select students whose age is between 20 and 22
select first_name, age from students3
where age between 20 and 23;


--# IN operator
-- Select students from Bangladesh, India or USA
--(OLD WAY)
select first_name, country from students3
where country = 'Bangladesh' or country = 'India' or country = 'USA';

--(NEW WAY)
select first_name, country from students3
where country in ('Bangladesh', 'India', 'USA');

-- Select students enrolled in 'Computer Science' , 'Mathematics', or 'Biology'
select first_name, course from students3
where course in ('Computer Science', 'Mathematics', 'Biology');


--# LIKE and ILIKE operator: Like is case sensitive, Ilike is not case sensitive
-- Select students whose first name starts with 'A'
-- Ans: '_' underscore means one character, and '%' means it can be one or lots of character

Select * from students3
where first_name like 'A%';

Select * from students3
where first_name like 'A__';  -- this means it only contain 3 character but starts with 'A';

-- Select students whose first name ends with 'A' 
--case sensitive
Select * from students3
where first_name like '%a';

-- without case sensitive
Select * from students3
where first_name Ilike '%A';


--# NOT operator
--Select students who are not from 'Canada'
select first_name, country from students3
where not country = 'Canada';

-- Select students whose grade is not 'A+'
select first_name, grade from  students3
where not grade = 'A+';


--# Scalar Functions (operate on single values)
--UPPER(), LOWER(), LENGTH() , CONCAT()

select upper(first_name) as "Uppercase Name" from students3;

select concat(first_name, last_name) as "Full Name", first_name, last_name from students3;


-- Aggregate Functions (operate on multiple rows), it returns only one value
-- COUNT(), SUM(), AVG(), MIN(), MAX()

-- row count
select count(*) from students3;

select sum(age) from students3;

select avg(age) from students3;

select max(age) from students3;
