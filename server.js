// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost:8081',
  user: 'lms',
  password: 'lms',
  database: 'lms'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(query, [email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user into database:', err);
      res.status(500).send({ success: false, message: 'Registration failed' });
      return;
    }
    res.send({ success: true, message: 'Registration successful' });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error fetching user from database:', err);
      res.status(500).send({ success: false, message: 'Login failed' });
      return;
    }
    if (results.length > 0) {
      res.send({ success: true, message: 'Login successful' });
    } else {
      res.send({ success: false, message: 'Invalid email or password' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
