//C:\Users\knowl\Documents\hyf\prep-exercises\databases\Week2\connection_query.js
import mysql from 'mysql';

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    multipleStatements: true
});


/*Connect to SQL server*/
connection.connect(err => {
    if (err) {
        return console.error('Connection error: ' + err.stack);
    }
    console.log('Connected!');
});
