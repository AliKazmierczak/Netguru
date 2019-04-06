const Joi = require('joi');
const mongoose = require('mongoose');

const Movie = mongoose.model('Movie', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    type: {
        type: String,
        required: true,
        enum: ["movie", "series", "episode"]
    },
    year: {
        type: Number,
        required: true,
        length:4
    },
    author:{
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        default: "Unknown"     
    },
    genre:{
        type: Array,
        trim: true,
        minlength: 3,
        maxlength: 255,
        default: "Unknown" 
    },
    plot: {
        type: String,
        minlength: 5,
        maxlength:2500,
        default: "Overview to be added at a later date."
    },

    
}));

function validate(movie) {             //This function is used for validation of requests
    const schema = {
        title: Joi.string().min(3).max(255).required(),
        author: Joi.string().min(3).max(255),
        genre: Joi.string().min(3).max(255),
        type: Joi.string().required().valid(["movie", "series", "episode"]),
        year: Joi.number().required().max(4).min(4),
        plot: Joi.string().min(5).max(2500)
    };
    return Joi.validate(movie, schema);
};

exports.Movie = Movie;
exports.validate = validate;