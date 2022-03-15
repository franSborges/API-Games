const express = require("express");
const {
  listGames,
  getGameById,
  addGame,
  deleteGame,
  updateGame
} = require("../controllers/games");

const app = express();

app.get("/games", listGames);

app.get("/games/:id", getGameById);

app.post("/game", addGame);

app.delete("/game/:id", deleteGame);

app.put("/game/:id", updateGame);

module.exports = app;