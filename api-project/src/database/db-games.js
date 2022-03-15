const Sequelize = require("sequelize");

const connection = new Sequelize('confidential', 'confidential', 'confidential', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection;