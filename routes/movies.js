const express = require('express');
const router = express.Router();
const { Movie, validate } = require('../models/movie');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

router.get('/', async (req, res) => {
    const movies = await Movie
        .find()
        .sort('title');
    res.status(200).send(movies);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    try {
        var omdbResponse = await axios.get(process.env.OMDB_URL, {
            params: {
                'apikey': process.env.OMDB_KEY,
                's': req.body.title
            }
        })
        let movieData = omdbResponse.data.Search[0];

        const movieExists = await Movie.findOne(
            { 
                $and: [
                    { title: movieData.Title },
                    { type: movieData.Type },
                    { year: movieData.Year }
                ]
            }
        ) !== null;
        if (movieExists) {
            return res.status(409).send({
                'error': "We already have a " + movieData.Type + " titled '" + movieData.Title + "' in our database!",
                'solution': "If you meant a different position with '" + req.body.title + "' in its name, please add more details in 'title' field."
            });
        }

        let movie = new Movie({
            'title': movieData.Title,
            'year': movieData.Year,
            'type': movieData.Type,
            'poster': movieData.Poster
        });

        await movie.save();
        res.status(201).send(movie);
    } catch (error) {
        res.status(400).send({
            'error': error.message
        });
    }
});

module.exports = router;
