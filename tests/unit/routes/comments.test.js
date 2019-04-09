const request = require('supertest');
const express= require('express');
const router = express.Router();
const {Comment} = require('../../../models/comment')

describe('/comments `GET`', () => {
    it('should get a list of movies from DB', () => {
        const comment = Comment;

        request(router)
        .get('/comments')
        .expect(comment)
    });
});

describe('/comments `POST`', () => {
    it('when data is valid the module should post a new comment and add it to DB', () => {
        let comment = new Comment({                 
            title: 'Tytuł',
            author: 'Author',
            text: 'Text'
        });
        request(router)
        .post('/comments')
        .expect(comment)
    });
});

describe('/comments `POST`', () => {
    it('when only text is added the module should post a new comment and add it to DB', () => {
        let comment = new Comment({                 
            text: 'Text'
        });
        request(router)
        .post('/comments')
        .expect(comment)
    });
});

describe('/comments `POST`', () => {
    it('when nothing is added the module should return status 400', () => {
        let comment = new Comment({                 
            text: ''
        });
        request(router)
        .post('/comments')
        .expect(400)
    });
});

describe('/comments `POST`', () => {
    it('when only title and author is added the module should return status 400', () => {
        let comment = new Comment({                 
            title: 'Tytuł',
            author: 'Author'
        });
        request(router)
        .post('/comments')
        .expect(400)
    });
});