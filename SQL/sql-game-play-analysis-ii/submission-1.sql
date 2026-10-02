-- Write your query below


SELECT a.player_id, a.device_id
FROM activity A
INNER JOIN (
    SELECT player_id, MIN(event_date) as first_login
    FROM activity
    GROUP BY player_id
) first_logins ON  a.event_date = first_logins.first_login;