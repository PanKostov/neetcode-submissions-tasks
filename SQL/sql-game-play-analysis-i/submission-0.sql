-- Write your query below
SELECT player_id, MIN(event_date) as first_login
FROM activity a
GROUP BY player_id