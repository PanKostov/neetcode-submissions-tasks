-- Write your query below
SELECT DISTINCT(c.title)
FROM content c
JOIN tv_program tp USING(content_id)
WHERE c.kids_content = 'Y' 
AND program_date >= '2020-06-01 00:00' 
AND program_date < '2020-07-01 00:00'
AND content_type = 'Movies'
