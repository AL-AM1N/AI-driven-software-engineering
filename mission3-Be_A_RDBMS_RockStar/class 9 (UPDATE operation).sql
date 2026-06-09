select * from students3;

-- UPDATE operations: we have to be careful about the condition


-- jekhane email = null pabe shekhane update korbe
update students3 set email = 'default@gmail.com'
where email is null;


-- update multiple value of a row
update students3
set first_name = 'Emmana', age = 25
where student_id = 2;


-- update multiple row's value
update students3
set grade = 'C'
where student_id in (1, 2);



