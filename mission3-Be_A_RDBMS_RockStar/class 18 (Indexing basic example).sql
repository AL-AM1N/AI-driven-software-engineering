-- INDEXING: amra onek boro table datar upor indexing kore thaki

-- pros: select operation gulay query fast kore dey
-- cons: update, insert er khetre slow kore dey
-- NOTE: normally amra 'where' jei column a use kori, shekhane indexing kore thaki

-- syntex:
create index idx_users_email
on users(email) -- users table er email column er upor indexing korteci, jekhane 1 lac data ase

-- indexing cancel korte
drop index idx_users_email


EXPLAIN ANALYZE -- eita diye amra query analyze details dekhte pari, query time o dekhte pari 
select * from users where email = 'example@gmail.com';








