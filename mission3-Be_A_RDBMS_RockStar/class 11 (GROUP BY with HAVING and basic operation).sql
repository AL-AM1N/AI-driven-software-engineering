-- GROUP BY operation: we can only use aggregate function here

-- syntex:
select grade from students3
  group by grade;

--average age of students by country
select country, avg(age) from students3
group by country;


-- count students by country
select country, count(*) from students3
group by country;

-- count students by grade
select grade, count(*) from students3
group by grade;



-- GROUP BY with HAVING: 'having' runs operation in every group
-- courses with more than 4 students
select course, count(*) from students3
group by course
 having count(*) > 2 ;

-- countries where average student age is grater than 21
select country, avg(age) from students3
group by country
having avg(age) > 21;