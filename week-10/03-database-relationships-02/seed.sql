-- CREATE categories
-- -- -- -- --
CREATE TABLE categories (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT
)

INSERT INTO categories (name) VALUES
('Childrens'), --1 <-- we're making a note here of the ID of each category as it appears in the categories table
('Fiction'), --2
('Non Fiction'), --3
('Self-Development'), --4
('Creative'), --5
('Autobiography'), --6
('Fantasy'), --7
('Guide'), --8
('Space'), --9
('Ocean') --10


-- CREATE junction table
-- -- -- -- --
--The junction table is where we make the link between "book" and "category"
CREATE TABLE books_categories_junction (
  book_id INT REFERENCES books_002(id),
  category_id INT REFERENCES categories(id)
)

--We make a lot of INSERTs, because each entry has to be in its own row
--We'll "aggregate" our results into an array later
INSERT INTO books_categories_junction (book_id, category_id) VALUES
(8, 1),
(8, 2),
(8, 7),
(11, 2),
(11, 8),
(14, 6),
(14, 8),
(14, 10)

-- SELECT
-- -- -- -- --
--Lets select our books and with it, get an array of categories.
SELECT title, synopsis, publish_date, ARRAY_AGG(categories.name) AS categories --First select the things you want from the main table. Our main table is 'books_002'.
--The ARRAY_AGG() function is targeting a column to aggregate. (It works alongside GROUP BY!)
--"AS categories" says 'make the column name say categories
FROM books_002 --This is normal; our main table we're selecting from
JOIN books_categories_junction ON books_002.id = books_categories_junction.book_id --When JOINing, we first need to JOIN the junction table onto the main table
JOIN categories ON books_categories_junction.category_id = categories.id --Next, we need to JOIN the categories table onto the junction table
GROUP BY books_002.title, books_002.synopsis, books_002.publish_date --"GROUP BY" works alongside "ARRAY_AGG()"; you need to give it the columns you SELECTed. Why? So that your results do not come through duplicated!