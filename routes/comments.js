const express= require('express');
const router = express.Router();
const {Comment, validate} = require('../models/comment');

router.get('/', async (req,res)=>{                  //This function returns all existing movies at '/api/movie'
    const comments = await Comment
        .find();        
    res.send(comments);
});

router.post('/', async (req,res)=>{                 // This function adds a new movie at '/api/movie'
    const {error} = validate(req.body);        // This validates the new movie and doesn't allow a wrong one to be posted
    if (error) return res.status(400).send(error.details[0].message);
   
    let comment = new Comment({                 //If a new movie is unique it is added to database
        title: req.body.title,
        author: req.body.author,
        text: req.body.text
    }); 
    await comment.save();

    res.send(comment);
    console.log('Added a new comment by: ', req.body.author);
});

module.exports=router;