# CODEMATIC TEST REST API with Node.js, Mongoose & TypeScript

Note: This repository includes the [postman collection for the API](postman_collection.json)

# Description

This API Does The following

- Get list of Films.
  - Each film contains the id, title, release date and comment count. And the data was gotten from https://swapi.dev/api/films
  - All the Films were sorted in ascending order by release date.
  - Comment can be Added to a film
  - Comment length was limited to 500 characters
  - You can Get a list of comments for a film.
  - Comments were in ascending order of when they were created.

## What you will need

- A running instance of MongoDB
- Postman
- Redis Server
- An IDE or text editor (VS Code)
- A web browser
- A package manager such as NPM or Yarn
- Node.js installed

## Technologies

- Node.js
- MongoDB with Mongoose
- TypeScript
- Express.js & Express.js middleware
- Redis Server
- Zod validation

# Deployment

This app is deployed on railway because of the redis server https://codematicore-production-8a2d.up.railway.app/

# Documentation

[The postman Documentation is here](https://documenter.getpostman.com/view/24158326/2s93JtP31j)
