const Joi = require('joi');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
Joi.objectId = require('joi-objectid')(Joi);
const movies = require('./routes/movies');
const comments = require('./routes/comments');

mongoose.connect('mongodb://localhost/Guru', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());
app.use('/movies', movies);
app.use('/comments', comments);

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));