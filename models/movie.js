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
    year: {
        type: Number,
        length: 4
    },
    type: {
        type: String,
        enum: ["movie", "series", "episode", "Unknown"]
    },
    poster:{
        type: String,
        minlength: 3,
        maxlength: 255
    }
}));

function validate(movie) {             //This function is used for validation of requests
    const schema = {
        title: Joi.string().min(3).max(255).required(),
        year: Joi.number().min(1900).max(2050),
        type: Joi.string().valid(["movie", "series", "episode", "Unknown"]),
        poster: Joi.string().min(3).max(255)
    };
    return Joi.validate(movie, schema);
};

exports.Movie = Movie;
exports.validate = validate;
