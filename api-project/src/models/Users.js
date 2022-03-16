const Sequelize = require("sequelize");
const connection = require("../database/db-games");

const Users = connection.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

Users.sync({ force: false }).then(() => console.log('connected'));

module.exports = Users;