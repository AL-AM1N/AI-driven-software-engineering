--create table
create table person (
    id serial primary key,
    username varchar(20) unique,
    email varchar(100) unique,
    age int check (age >= 20),
    isActive boolean default true
);

--single row insert
insert into
    person (id, username, email, age, isActive)
values
    (1, 'amin', 'amin@gmail.com', 25, true)
  
--another insert without "inActive column"  
insert into
    person (id, username, email, age)
values
    (3, 'al', 'al@gmail.com', 23) -- here by default it set true for "isActive"

-- insert multiple row
insert into
    person (username, email, age)
values
    ('alai', 'alai@gmail.com', 23),
    ('alam', 'alam@gmail.com', 24),
    ('alan', 'alan@gmail.com', 25);

--insert without column name
insert into
    person 
values
    (7, 'alasf', 'alasdf@gmail.com', 23)