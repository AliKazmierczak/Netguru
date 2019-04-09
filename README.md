# Simple API

#Description
This is an API for viewing and posting movies and comments

## Table of contents
    * Installation/Setup
    * Usage
    * Technologies
    * Creator
    * End notes

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
# Usage 

## /Movies

### GET
Pulls the list of movies from the DB.

### POST
Allows to add new movies to the DB. 
Additionally, the module doesn't allow for copies of the same movie/series/episode to be posted.

### Properties required to POST a new movie:
- title
- year (of release)
- type (either: movie, series or episode)

### Optional properties:
- author
- genre (possible to pick multiple - this is an array)
- plot


## /Comments

### GET
Pulls the list of comments from the DB.

### POST
Allows to add new comments to the DB.

### Properties required to POST a new comment:
- text

### Optional properties:
- author
- title

# Technolgies used:
- expressjs
- mongodb
- joi
- jest
- supertest
- nodemon (optional)

## Creator

| Name                |
| ------------------- |
| **Alicja Kaźmierczak** |

## End notes
I am aware that the tests were very simple, sadly for the time being I don't know how to write other. I should be able to learn writing more complex ones in about a month time.
I wasn't sure what properties there should be for /movies and hope that my choice is acceptable.
I sincerly hope you will find this simple API passable.
Thank you for your interest.