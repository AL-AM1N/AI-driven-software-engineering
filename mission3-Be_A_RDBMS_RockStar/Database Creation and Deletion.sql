-- DATABASE CREATION & DELETION

--1. Create a new 
--Ans:
--create database school;

--2. Delete (drop) a database completely
--ans:
--drop database school;


--TABLE CREATION
--3. Create a new table
create table students (
  id serial,
  name varchar(50),
  age int, 
  isActive boolean,
  dob date
);


-- TABLE DELETION & CLEARING
--4. Delete (drop) the table permanantly
--ans:
drop table schools;

--5. Drop + recreate if already exists (safe way)
--ans: 
drop table if exists schools;






