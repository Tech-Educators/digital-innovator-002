-- CREATE
-- -- -- -- --
CREATE TABLE authors (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author_name TEXT
);

CREATE TABLE books_002 (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title TEXT,
  author_id INT REFERENCES authors(id),
  synopsis TEXT,
  publish_date INT
)

-- INSERT
-- -- -- -- --
INSERT INTO authors (author_name) VALUES
('Jeff Brown'), --1
('Austin Kleon'), --2
('David Thomas'), --3
('Max Brooks'),--4
('Varinder Gill'),--5
('Bertie Raffle');--6

INSERT INTO books_002 (title, author_id, synopsis, publish_date) VALUES 
('Flat Stanley', 1, 'Childrens book about a 2D fella', 1964),
('Steal Like An Artist', 2, 'Creative much? Use others as inspiration!', 2012),
('The Pragmatic Programmer', 3, 'A set of fundamental mindsets and techniques for your programming journey.', 1999),
('The Zombie Survival Guide', 4, 'A fictional guide to a very real problem.', 2003),
('A life on the edge', 6, 'An autobiographical foray into a wonderful land', 2026),
('A life in the stars', 6, 'An autobiographical foray into a wonderful solar system', 2027),
('A life under the sea', 6, 'An autobiographical foray into a watery road', 2028)

-- SELECT
-- -- -- -- --
-- We've now got relationships set up, so, our SELECT needs to change a little bit
SELECT title, synopsis, publish_date, authors.author_name -- we can be specific about the columns we want from our SQL. We also need to specify that we want a column (author_name) from the authors table
FROM books_002 -- Here with our "FROM" keyword, we're giving the main table in this case books_002
JOIN authors ON books_002.author_id = authors.id -- The "JOIN" keyword is crucial for attaching the author name to the corresponding ID on the books_002 table.
-- It's kind of like saying "Join the authors table onto the books_002 table where the author_id from books_002 matches the id from authors"