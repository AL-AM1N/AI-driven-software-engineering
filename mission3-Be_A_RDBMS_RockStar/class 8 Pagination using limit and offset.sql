-- limit (limit set kore dey) and offset (main value theke kichu bad dey)

select * from students3 limit 5; -- it will show first 5 students3 table data

select first_name, age from students3
where age between 20 and 23 limit 5;


-- offset
select * from students3 limit 5 offset 2; -- this query will remove 1st 2 rows, and shows from 3 to 7 rows.


-- main pagination logic:
-- jokhon amra page 1 a click korbo tokhon backend a 0 pathabe, abar page 2 te click korle backend a 1 pathabe, that means jei page a click korbo always tar theke 1 kom pathabe backend a 
-- for page 1: offset 5 * 0 = 0 , shunno ta bad dibe (dekhabe 1-5 rows data)
-- for page 2: offset 5 * 1 = 5 , 2nd page a 1st 5 ta dekhabe na (dekhabe 6-10 rows data)
-- for page 3: offset 5 * 2 = 10 , 3rd page a 1st 10 ta dekhabe na (dekhabe 11-15 rows data)

select * from students3 limit 5 offset 5 * 0;
select * from students3 limit 5 offset 5 * 1;
select * from students3 limit 5 offset 5 * 2;
select * from students3 limit 5 offset 5 * 3;
select * from students3 limit 5 offset 5 * 4;
select * from students3 limit 5 offset 5 * 5;

