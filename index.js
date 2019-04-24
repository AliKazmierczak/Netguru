const Joi = require('joi');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
Joi.objectId = require('joi-objectid')(Joi);
const movies = require('./routes/movies');
const comments = require('./routes/comments');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.HOST_URL, { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB NETGURU... '))
.catch(err => console.error('Could not connect to MongoDB NETGURU...', err));

app.use(express.json());
app.use('/movies', movies);
app.use('/comments', comments);

const port = process.env.PORT
app.listen(port, () => console.log(`Listening on port ${port}...`));