-- Write your query below
SELECT name FROM customers
WHERE customers.id NOT IN
(SELECT customer_id
FROM orders o
INNER JOIN customers ON o.customer_id = customers.id
 )


