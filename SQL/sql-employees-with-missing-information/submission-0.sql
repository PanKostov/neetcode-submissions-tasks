-- Write your query below
SELECT employee_id
FROM employees
FULL JOIN salaries USING (employee_id)
WHERE name IS NULL or salary is NULL