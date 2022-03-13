const express = require("express");
const {
  listGames,
  getGameById,
  addGame
} = require("../controllers/games");

const app = express();

app.get("/games", listGames);

app.get("/games/:id", getGameById);

app.post("/game", addGame);

module.exports = app;