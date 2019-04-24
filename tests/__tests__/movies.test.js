const request = require('supertest');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const moviesRoutes = require('../../routes/movies')
const {Movie} = require('../../models/movie');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.TEST_URL, { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB NETGURU... '))
.catch(err => console.error('Could not connect to MongoDB NETGURU...', err));

app.use(express.json());
app.use('/movies', moviesRoutes);

beforeEach(() => {
  process.env.TEST_URL
  Movie.remove({}, function(err) { })
});
afterEach(() => {
  process.env.TEST_URL
  Movie.remove({}, function(err) { })
});

describe(`POST /movies` , () => {
  it("should require movie title", (done) => {
    request(app)
      .post("/movies")
      .send({})
      .end(function(err, res) {
        expect(res.status).toEqual(400)
        expect(res.error.text).toEqual('"title" is required')
        done();
      });
  });

  it("should create with movie title", (done) => {
    let mock = new MockAdapter(axios)
    mock.onGet(process.env.OMDB_URL).reply(200, {
        Search: [
          {
            'Title': 'The Matrix',
            'Type': 'movie',
            'Year': '1999'
          }
        ]
    });
    
    request(app)
      .post("/movies")
      .send({
        "title": "Matrix"
      })
      .end(async (err, res) => {
        expect(res.status).toEqual(201)
        let addedMovie = await Movie.findOne(
          {'title': 'The Matrix'}
        );
        expect(addedMovie).toBeInstanceOf(Movie)
        done();
      });
  });
});

describe('/movies `GET`', () => {
  it('should get a list of movies from DB', () => {
    let Example = {'title': 'The Matrix'};
    const movies = Example;

      request(app)
      .get('/movies')
      expect(movies).toBeEqual(Example)
  });
});

