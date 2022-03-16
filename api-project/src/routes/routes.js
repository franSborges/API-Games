const express = require("express");
const cors = require("cors");
const Users = require("../models/Users");
const {
  listGames,
  getGameById,
  addGame,
  deleteGame,
  updateGame
} = require("../controllers/games");

const {
  listUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser
} = require("../controllers/users");

const app = express();
app.use(cors());

//-------------Games--------------------------------------
app.get("/games", listGames);
app.get("/games/:id", getGameById);
app.post("/game", addGame);
app.delete("/game/:id", deleteGame);
app.put("/game/:id", updateGame);

//-----------Users----------------------------------

app.get("/users", listUsers);
app.get("/users/:id", getUserById);
app.post("/user", addUser);
app.delete("/user/:id", deleteUser);
app.put("/user/:id", updateUser);


module.exports = app;