-- Write your query below
SELECT e.event_day as day, e.emp_id, SUM(e.out_time - e.in_time) as total_time
FROM employees e
GROUP BY day, emp_id
