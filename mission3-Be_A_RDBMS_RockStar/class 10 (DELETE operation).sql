-- DELETE operations: we have to be carefull about the delete operatons

-- delete all the students whose grade is 'C'
delete from students3
where grade = 'C';


-- delete operation with multiple conditions
delete from students3
where age > 23 and grade = 'A';






