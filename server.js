// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const mongoURI = 'your_mongodb_connection_string';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// User schema
const UserSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String
});

const User = mongoose.model('User', UserSchema);

// Routes
app.post('/register', async (req, res) => {
  const { email, firstName, lastName } = req.body;
  const newUser = new User({ email, firstName, lastName });
  try {
    await newUser.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(400).send('Error registering user');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
