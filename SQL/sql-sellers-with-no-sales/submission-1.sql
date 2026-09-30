-- Write your query below
-- SELECT seller_name
-- FROM seller s NOT IN 
-- (JOIN orders o on s.seller_id = o.seller_id 
-- WHERE o.sale_date >=  DATE '2020-01-01' and o.sale_date < DATE '2021-01-01')

SELECT s.seller_name
FROM seller s
WHERE NOT EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.seller_id = s.seller_id
    AND o.sale_date >=  DATE '2020-01-01'
    AND o.sale_date < DATE '2021-01-01'
)
ORDER BY seller_name ASC
