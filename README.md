# Simple API

# Description
This is a simple REST API for fetching movies from an external API, viewing them as well as posting and viewing comments.

# Table of contents
    * Installation/Setup
    * Usage
    * Technologies
    * Creator

# Installation/Setup:
- You need to install nodejs 10
- then run
    ```
    npm install
    ```
- for tests run
    ```
    npm test
    ```
- for the application run
    ```
    npm run run 
    ```
- optionally, for continuous run
    ```
     run dev-run
    ```
# Usage 

## POST /Movies
Fetches a  movie/series/episode from OMDb API based on an offered phrase/title.
Additionally, the module doesn't allow for copies of the same movie/series/episode to be posted.

#### Properties required to POST a new movie:
- title (or a phrase by which the REST API finds a movie/series/episode at OMDb API)

#### If a position doesn't exist in the current DB the API will fetch and save a new position from OMDb API with properties:
- title (full title based on the phrase supplied by the user)
- year (of release)
- type (either: movie, series or episode)
- poster (url)

## GET /Movies
Pulls the list of movies from the DB.

## POST /Comments
Allows to add new comments to the DB.

#### Properties required to POST a new comment:
- text

#### Optional properties:
- author
- title

## GET /Comments
Pulls the list of comments from the DB.

# Technolgies used:
- expressjs
- mongodb
- joi
- jest
- supertest
- axios
- nodemon (optional for continuos run)
- dotenv
- babel

## Creator

| Name                |
| ------------------- |
| **Alicja Kaźmierczak** |

# End notes
Normally I'd add .env file in .gitignore and not include it in repository but as it is necessary to fully use this REST API, I made an exception and included this secret here.
Unfortunatelly, after I added axios I wasn't sure how to make tests work, so those are unfinished.