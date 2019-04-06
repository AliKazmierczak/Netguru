const Joi = require('joi');
const mongoose = require('mongoose');

const Comment = mongoose.model('Comment', new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 255
    },
    author: {
        type: String,
        trim: true,
        maxlength:(255),
        default: "Annonymus"
    },
    text: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2500
    }
}));

function validate(comment) {             //This function is used for validation of requests
    const schema = {
        title: Joi.string().min(2).max(255),
        author: Joi.string().max(255),
        text: Joi.string().min(2).max(2500).required()
    };
    return Joi.validate(comment, schema);
};

exports.Comment = Comment;
exports.validate = validate;