-- Write your query below

-- SELECT 
--     product_id,
--     stores.store
-- FROM products p
-- CROSS JOIN (
--     SELECT store FROM (VALUES ('store1'), ('store2'), ('store3')) AS t(store)
-- ) stores

-- SELECT
--     product_id,
--     pricec.price
-- CROSS JOIN LATERAL(
--     VALUES
--         (p.store1),
--         (p.store2),
--         (p.store3)
-- ) AS prices(price)
-- WHERE price IS NOT NULL




SELECT
    p.product_id,
    x.store,
    x.price
FROM products p
CROSS JOIN LATERAL (
    VALUES
        ('store1', p.store1),
        ('store2', p.store2),
        ('store3', p.store3)
) AS x(store, price)
WHERE x.price IS NOT NULL;

