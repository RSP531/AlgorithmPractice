--1 Get ID from tasks
SELECT * from tasks;

--2 SELECT * FROM REPORTS WHERE task_id  ID from tasks
SET @avg = 
SELECT AVG(score) FROM reports WHERE task_id=101;
SELECT AVG(score) FROM reports WHERE task_id=123;
SELECT AVG(score) FROM reports WHERE task_id=142;
SELECT AVG(score) FROM reports WHERE task_id=300;

--3 Take average & store as variable
-- IF(avg>60) THEN score_name='EASY';
-- ELSEIF(avg>20 && avg < 60 ) THEN score_name='MEDIUM';
-- ELSEIF(avg>60) THEN score_name='HARD';
SET @avg = 

SELECT avg
  CASE WHEN avg>60 THEN 'EASY';
  CASE WHEN avg>20 && avg <= 60 THEN 'MEDIUM';
  ELSE avg<=20 THEN 'HARD';
END AS difficulty
FROM _table_name

--4 RETURN THE TABLE
CREATE FUNCTION difficultyTable ()
RETURNS TABLE (
    task_id INT,
    task_name VARCHAR(50),
    difficulty VARCHAR(10)
)
AS 
RETURN 
  SELECT
    task_id,
    task_name,
    diffculty
  FROM


CREATE TABLE tasks (
  id integer not null,
  name varchar(40) not null,
  unique(id)
);

CREATE TABLE reports (
  id integer not null,
  task_id integer not null,
  candidate varchar(40) not null,
  score integer not null,
  unique(id)
);

INSERT INTO tasks (id, name) VALUES (101, 'MinDist');
INSERT INTO tasks (id, name) VALUES (123, 'Equi');
INSERT INTO tasks (id, name) VALUES (142, 'Median');
INSERT INTO tasks (id, name) VALUES (300, 'Tricoloring');

INSERT INTO tasks (id, name) VALUES (3, 'Cake');
INSERT INTO tasks (id, name) VALUES (6, 'GameOfNuts');
INSERT INTO tasks (id, name) VALUES (7, 'CircleIntersectionArea');
INSERT INTO tasks (id, name) VALUES (9, 'JessicaAndBrian');

INSERT INTO reports (id, task_id, candidate, score) VALUES (12,101, 'John Smith', 100);
INSERT INTO reports (id, task_id, candidate, score) VALUES (24,123, 'Delaney Lloyd', 34);
INSERT INTO reports (id, task_id, candidate, score) VALUES (37,300, 'Monroe Jimenez', 50);
INSERT INTO reports (id, task_id, candidate, score) VALUES (49,101, 'Stanley Price', 45);
INSERT INTO reports (id, task_id, candidate, score) VALUES (51,142, 'Tanner Sears', 37);
INSERT INTO reports (id, task_id, candidate, score) VALUES (68,142, 'Lara Fraser', 3);
INSERT INTO reports (id, task_id, candidate, score) VALUES (83,300, 'Tanner Sears', 0);


INSERT INTO reports (id, task_id, candidate, score) VALUES (2,6, 'Tanner Sears', 0);
INSERT INTO reports (id, task_id, candidate, score) VALUES (3,3, 'Tanner Sears', 30);
INSERT INTO reports (id, task_id, candidate, score) VALUES (5,3, 'Tanner Sears', 10);
INSERT INTO reports (id, task_id, candidate, score) VALUES (7,9, 'Tanner Sears', 60);
INSERT INTO reports (id, task_id, candidate, score) VALUES (11,6, 'Tanner Sears', 81);
INSERT INTO reports (id, task_id, candidate, score) VALUES (12,6, 'Tanner Sears', 100);

-- task_id task_name    difficulty
-- 101     MinDist      Easy
-- 123     Equi         Medium
-- 142     Median       Hard
-- 300     Tricoloring  Medium

--works! SOLVED
SELECT tasks.id, tasks.name AS task_name,
  CASE WHEN AVG(reports.score) <= 20 THEN 'Hard'
  WHEN AVG(reports.score) > 20 AND AVG(reports.score) <= 60 THEN 'Medium'
  ELSE 'Easy'
  END AS difficulty
FROM tasks
RIGHT JOIN reports
ON tasks.id = reports.task_id
GROUP BY reports.task_id
ORDER BY tasks.id; 

--WORKS!!
SELECT tasks.id, tasks.name AS task_name, AVG(score) AS difficulty
FROM tasks
RIGHT JOIN reports
ON tasks.id = reports.task_id
GROUP BY reports.task_id
ORDER BY tasks.id;

--messing around;
SELECT tasks.id, tasks.name AS task_name,
  CASE WHEN AVG(reports.score) <= 20 THEN 'Hard'
  WHEN AVG(reports.score) > 20 AND AVG(reports.score) <= 60 THEN 'Medium'
  ELSE 'Easy'
  END AS difficulty
FROM tasks
RIGHT JOIN reports
ON tasks.id = reports.task_id;
GROUP BY reports.task_id
ORDER BY task_name; 