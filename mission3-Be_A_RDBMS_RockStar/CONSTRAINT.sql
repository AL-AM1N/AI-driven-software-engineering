-- Different types of CONSTRAIN:

-- Primary Key (unique identifier)
-- NOT NULL (must have a value)
-- UNIQUE (no duplicate values allowed)
-- CHECK (condition must be true)
-- DEFAULT (auto value if not given)
-- FOREIGN KEY (must exist in another table)

create table students1 (
  id serial primary key,
  name varchar(20) not null,
  email varchar(100) unique,
  age smallint check(age >= 18),
  isActive boolean default true
);