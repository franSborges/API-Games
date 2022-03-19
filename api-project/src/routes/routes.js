const express = require("express");
const cors = require("cors");
const modelGames = require("../models/games");

const games = require('../controllers/games')

const app = express();
app.use(cors());

//-------------Games---------------------------
app.get("/games", games.listGames);
app.get("/games/:id", games.getGameById);
app.post("/game", games.addGame);
app.delete("/game/:id", games.deleteGame);
app.put("/game/:id", games.updateGame);


module.exports = app;