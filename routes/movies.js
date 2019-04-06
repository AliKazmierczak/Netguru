const express= require('express');
const router = express.Router();
const {Movie, validate} = require('../models/movie');

router.get('/', async (req,res)=>{                  //This function returns all existing movies at '/api/movie'
    const movies = await Movie
        .find()
        .sort('title');        
    res.send(movies);
});

router.post('/', async (req,res)=>{                 // This function adds a new movie at '/api/movie'
    const {error} = validate(req.body);        // This validates the new movie and doesn't allow a wrong one to be posted
    if (error) return res.status(400).send(error.details[0].message);

    const old = await Movie.findOne({$and: [{title: req.body.title}, {type: req.body.type}, {year: req.body.year}]});    //This checks whether the new movie isn't the same as an existing one
    if (old) {                                      // This doesn't allow for an old movie to be added again
        console.log('Movie already exists');
        return res.send('We already have this '+ req.body.type + ' in our database!');
    }
    
    let movie = new Movie({                 //If a new movie is unique it is added to database
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        type: req.body.type,
        year: req.body.year,
        plot: req.body.plot
    }); 
    await movie.save();

    res.send(movie);
    console.log('Added a new movie: ', req.body.title);
});

module.exports=router;