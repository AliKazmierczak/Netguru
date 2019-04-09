const request = require('supertest');
const express= require('express');
const router = express.Router();
const {Movie} = require('../../../models/movie')

describe('/movies `GET`', () => {
    it('should get a list of movies from DB', () => {
        const movies = Movie;

        request(router)
        .get('/')
        .expect(movies)
    });
});

describe('/movies `POST`', () => {
    it('when data is valid the module should post a new movie and add it to DB', () => {
        let movie = new Movie({                 
            title: 'Tytuł',
            type: 'Movie',
            year: '2019',
            author: 'Author',
            genre: 'Genre',
            plot: 'Plot'
        });
        request(router)
        .post('/')
        .expect(movie)
    });

    it('when only required data is input the module should post a new movie and add it to DB', () => {
        let movie = new Movie({                 
            title: 'Tytuł',
            type: 'Movie',
            year: '2019',

        });
        request(router)
        .post('/')
        .expect(movie)
    });

    it('when year is not recieved the module should return status 400', () => {
        let movie = new Movie({                 
            title: 'Tytuł',
            type: 'Movie',

        });
        request(router)
        .post('/')
        .expect(400)
    });

    it('when title and year is not recieved the module should return status 400', () => {
        let movie = new Movie({                 
            type: 'Movie',

        });
        request(router)
        .post('/')
        .expect(400)
    });

    it('when title, year and type is not recieved the module should return status 400', () => {
        let movie = new Movie({                 
            author: 'Author',
            genre: 'Genre',
            plot: 'Plot'
        });
        request(router)
        .post('/')
        .expect(400)
    });

    it('when invalid year is set the module should return status 400', () => {
        let movie = new Movie({                 
            title: 'Tytuł',
            type: 'Movie',
            year: '1',

        });
        request(router)
        .post('/')
        .expect(400)
    });

    it('when invalid type is set the module should return status 400', () => {
        let movie = new Movie({                 
            title: 'Tytuł',
            type: 'Typ',
            year: '2019',

        });
        request(router)
        .post('/')
        .expect(400)
    });
});