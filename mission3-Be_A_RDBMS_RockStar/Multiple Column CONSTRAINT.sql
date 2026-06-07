-- Multiple column CONSTRAIN:
-- constrain define at the end

create table students2 (
  id serial,
  userName varchar(20) not null,
  email varchar(100),
  age smallint check(age >= 18),
  isActive boolean default true,
  
  primary key(id), -- primary key (userName, email); eikhane 2 ta column milay primary key hoto
  unique(userName, email)
);









