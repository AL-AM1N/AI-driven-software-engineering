-- INNER JOIN

-- user table
create table users(
  id serial primary key,
  username varchar(25) not null
)


-- post table
create table posts (
  id serial primary key,
  title text not null,
  user_id int references users(id)
)


--INSERT data in Users table
INSERT INTO users (username) VALUES
('alice'),
('bob'),
('charlie'),
('david'),
('emma');


--INSERT data in Posts table 
INSERT INTO posts (title, user_id) VALUES
('Getting Started with PostgreSQL', 1),
('Understanding SQL Joins', 2),
('Database Design Best Practices', 1),
('Introduction to Indexing', 4);

-- another row without user_id
insert into posts (title)
  values ('Getting Started with PostgreSQL')

  

-- How inner join works
-- Question: Retrieve all posts title with their username
-- Ans: here title is in the 'posts' table, and username is in the 'users' table, but there is a relation between two table using users id.
select title, username from posts
inner join users on posts.user_id = users.id


-- whole table after inner join:
select * from posts
inner join users on posts.user_id = users.id


-- we can use 'alias' for easier
select p.id, title, username from posts as p -- here p.id means posts table's id
inner join users as u on p.user_id = u.id




--LEFT JOIN  
-- left join: jei table 1st a declare kora hoy shetai left table, left join er khetre left table priority pay beshi
select * from posts as p -- here posts is a left table
left join users as u on p.user_id = u.id -- we can also call it 'left outer join users as u on p.user_id = u.id'


-- RIGHT JOIN
-- right join: jei table 2nd a declare kora hoy shetai right table, right join er khetre right table priority pay beshi
select * from posts as p
right join users as u on p.user_id = u.id -- we can also call it 'right outer join users as u on p.user_id = u.id'



-- FULL JOIN
select * from posts as p
full join users as u on p.user_id = u.id -- we can also call it 'full outer join users as u on p.user_id = u.id'




-- there are two more join (less important): 
--1. cross join & 
--2. natural join




