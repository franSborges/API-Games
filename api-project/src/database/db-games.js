const Sequelize = require("sequelize");

const connection = new Sequelize('', '', '', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection;