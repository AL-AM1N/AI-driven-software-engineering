-- TRIGGER basic syntex:

-- CREATE TRIGGER trigger_name
-- {BEFORE | AFTER | INSTEAD OF} {INSERT | UPDATE | DELETE | TRUNCATE}
-- ON table_name
-- [FOR EACH ROW]
-- EXECUTE FUNCTION function_name();

------------------------------------------------------------
-- DELETE functon
create function dlt_employee_by_id(emp_id int)
returns void
language sql
  as
$$
  delete from employees where id = emp_id  
$$
------------------------------------------------------------

-- employee log table: jokhon kono row delete hobe employees table theke tokhon sheta amra tract rakhbo log table a
create table employee_logs(
  id serial primary key,
  emp_name varchar(50),
  action varchar(25),
  action_time timestamp default now()
)

-- creating trigger: jate kichu delete hower shathe shathe trigger kore
create trigger save_employee_delete_logs
after delete
on employees
for each row
execute function log_employee_deletion();

-- creating log_employee_deletion() function:
create function log_employee_deletion()
returns trigger
language plpgsql
as
$$
  begin
  insert into employee_logs (emp_name, action) values (old.name, 'delete'); -- jehetu delete hower pore data old hoye jay, tai amra eikhane old use korechi
  return old; -- eikhane old return kortei hobe
  end;
$$

------------------------------------------------------------------

-- calling delete function
select dlt_employee_by_id(5)







