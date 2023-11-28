const express = require("express");

const app = express();

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to my favourite movie list.");
});

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const wantedId = parseInt(req.params.id, 10);
  const movieById = movies.find((e) => e.id === wantedId);

  if (movieById != null) {
    res.json(movieById);
  } else {
    res.sendStatus(404).send("Not Found");
  }
});

module.exports = app;

/* Lance node app.js dans le terminal */
/* http://localhost:5000/ */
/* http://localhost:5000/api/movies */
/* http://localhost:5000/api/movies/:id */
