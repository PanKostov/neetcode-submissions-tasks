-- Write your query below
-- SELECT employee_id, 
--     (SELECT COUNT(team_id)
--      FROM employee
--      GROUP BY team_id
--      ) as team_size
-- FROM employee

SELECT employee_id, team_size
FROM employee
JOIN
(
    SELECT  
        team_id,
        COUNT(team_id)  as team_size
    FROM employee
    GROUP BY team_id 
    ) team_sizes USING (team_id
)