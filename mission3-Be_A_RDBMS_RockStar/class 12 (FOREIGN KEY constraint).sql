-- FOREIGN key

-- user table
create table users(
  id serial primary key,
  username varchar(25) not null
)


-- post table
create table posts (
  id serial primary key,
  title text not null,
  user_id int references users(id) -- it's a foreign key
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


