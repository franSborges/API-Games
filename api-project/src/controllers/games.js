const Game = require("../models/Game");

const listGames = async (req, res) => {
  try {
    const game = await Game.findAll({raw: true});
    res.status(200).json(game);

  } catch (err) {
    res.status(500).json({ error: err });
  }
}

const getGameById =  async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).send("Bad Request");
  }

  if (!id) {
    return res.status(403).send("Forbidden");
  }

  try {
    const game = await Game.findOne({ where: { id: id }});
    
  if (!game) {
    return res.status(404).send("Not Found");
    }

    return res.status(200).json(game);
    
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

const addGame = async (req, res) => {
  const {name, price, year_release } = req.body;
  
  if (!name || !price || !year_release) {
    return res.status(400).send("Bad request All fields are mandatory");
  }

  const game = {
    name: name,
    year_release: year_release,
    price: price
  }
    
  try {
    await Game.create(game);
    return res.status(201).json({ message: "Game created successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}


const deleteGame = async (req, res) => {
  const { id } = req.params;
  const game = await Game.findOne({ where: { id: id } });

  if (!id) {
    return res.status(403).send("Forbidden");
  }
  
  if (isNaN(id)) {
    return res.status(400).send("Bad Request");
  }

  if(!game) {
    return res.status(404).send("Not Found");
  }
  
  try {
    await Game.destroy({ where: { id: id } });
    return res.status(200).send("User deleted successfully");

  } catch (err) {
    res.status(500).json({ error: err });
  }
}

const updateGame = async (req, res) => {
  const { id } = req.params;
  const { name, price, year_release } = req.body;
  
  if (!id) {
    return res.status(403).send("Forbidden");
  }

  if (isNaN(id)) {
    return res.status(400).send("Bad Request");
  }


  if (!name || !price || !year_release) {
      return res.status(400).send('Bad request All fields are mandatory');
  }

  let gameFound = await Game.findOne({ where: { id: id } });
  gameFound.name = name;
  gameFound.year_release = year_release;
  gameFound.price = price;

  try {
    await gameFound.save({ where: { id: id } });
    return res.status(204).send();

  } catch (err) {
    res.status(500).json({ error: err });
  }
}

module.exports = {
  listGames,
  getGameById,
  addGame,
  deleteGame,
  updateGame
}