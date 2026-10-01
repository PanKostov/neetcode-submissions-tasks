-- Write your query below
SELECT
    w.name AS warehouse_name,
    SUM(w.units * p.width * p.length * p.height) AS volume
FROM warehouse w
JOIN products p USING(product_id)
GROUP BY w.name