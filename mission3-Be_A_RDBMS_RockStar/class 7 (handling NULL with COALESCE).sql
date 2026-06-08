-- INSERT INTO students3 (first_name, last_name, age, grade, course, dob, blood_group, country) values('al ', 'amin', 22, 'A+', 'Mathematics', '2003-07-21', 'A+', 'Bangladesh')

select * from students3 where email is null;


-- understand how COALESCE works:
select coalesce (null, null, 2, 3); -- it will give '2'
select coalesce (null, null, 5, 2); -- it will give '3'
-- explanation: it returns first not null argument, here 2 and 5 is not null argument

-- if any email is null, then it will show "Not provided"
select coalesce(email, 'Not provided') as email from students3; 
-- explanation: in the database 31 row's email is null, that means 1st argument email = "Null", then it checks next argument, here the next argument is "Not provided", which is string, so it shows in the query "Not provided" instead of Null at the email field.



