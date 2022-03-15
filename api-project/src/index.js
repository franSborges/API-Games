const express = require("express");
const routes = require("./routes/routes");
const connection = require("./database/db-games");
//const Model = require()

connection.authenticate().then(() => {
  console.log("connected");
}).catch((err) => console.error(err));

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);