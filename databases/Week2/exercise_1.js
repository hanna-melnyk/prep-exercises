//C:\Users\knowl\Documents\hyf\prep-exercises\databases\Week2\exercise_1.js
import {connection} from './connection_query.js';

const createDatabaseAndUse = `
    CREATE DATABASE IF NOT EXISTS w2_research;
    USE w2_research;
`;
const createAuthorsTable = `
    CREATE TABLE IF NOT EXISTS authors (
        author_id INT AUTO_INCREMENT PRIMARY KEY,
        author_name VARCHAR(100) NOT NULL,
        university VARCHAR(100),
        date_of_birth DATE,
        h_index INT,
        gender ENUM('Male', 'Female', 'Other')
    );
`;

connection.query(createAuthorsTable, (err, results, fields) => {
    if (err) {
        console.error('Error creating authors table:', err.stack);
        return;
    }
    console.log('Authors table created.');
});

const addMentorColumn = `
    ALTER TABLE authors 
    ADD COLUMN mentor INT,
    ADD CONSTRAINT fk_mentor
    FOREIGN KEY (mentor) REFERENCES authors(author_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE;
`;

connection.query(addMentorColumn, (err, results, fields) => {
    if (err) {
        console.error('Error adding mentor column:', err.stack);
        return;
    }
    console.log('Mentor column added with foreign key constraint.');
});


// Closing the connection
connection.end();