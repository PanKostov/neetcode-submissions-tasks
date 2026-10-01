-- Write your query below
SELECT u.name, SUM(amount) as balance
FROM users u
JOIN transactions t USING(account)
GROUP BY NAME
HAVING (SUM(amount) > 10000)