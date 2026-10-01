-- Write your query below

SELECT customer_number FROM (
SELECT SUM(order_number) as total_ordered, customer_number
FROM orders o
GROUP BY customer_number
ORDER BY total_ordered DESC
LIMIT 1)

