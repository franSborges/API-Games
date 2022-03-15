const Sequelize = require("sequelize");
const connection = require("../database/db-games");


const Game = connection.define('games', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year_release: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
});

Game.sync({ force: false }).then(() => console.log("connected"));

module.exports = Game;

