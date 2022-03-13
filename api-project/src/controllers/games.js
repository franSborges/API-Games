const DB = require("../database/db-games");

const listGames = (req, res) => res.status(200).json(DB.games);
  
const getGameById = (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).send("Bad Request");
  }

  if (!id) {
    return res.status(403).send("Forbidden");
  }

  const gameFound = DB.games.find(game => game.id === Number(id));
  
  if (!gameFound) {
    return res.status(404).send("Not Found");
  }

  return res.status(200).json(gameFound);
}

const addGame = (req, res) => {
  const {name, price, year_release } = req.body;
  
  if (!name || !price || !year_release) {
    return res.status(400).send("Bad request All fields are mandatory");
  }
  const id = 5;

  DB.games.push({
    id: id++,
    name,
    year_release,
    price
  });

  return res.status(201);

}


module.exports = {
  listGames,
  getGameById,
  addGame
}