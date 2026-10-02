-- Write your query below


SELECT player_id, device_id
FROM activity
WHERE event_date IN
(SELECT MIN(event_date) as min_date
FROM activity a
GROUP BY player_id)