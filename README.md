# Installation/Setup:
- You need to install nodejs 10
- then run
```
npm install
npm run run 
```
#To add a new movie these positions are required:
- title
- year (of release)
- type (either: movie, series or episode)

#And these are optional for new movie:
- author
- genre (possible to pick multiple - this is an array)
- plot

Additionally, the module doesn't allow for copies of the same movie/series/episode to be posted, by checking title, year and type.

#To add a new comment you need to add:
- text

#And these are optional for new comment:
- author
- title

# Technolgies used:
- expressjs
- mongodb
- joi
- jest
- nodemon (optional)