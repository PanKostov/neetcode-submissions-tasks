-- Write your query below
SELECT  actor_id, director_id
FROM actor_director ad
GROUP BY actor_id, director_id
HAVING(COUNT(director_id) >= 3)