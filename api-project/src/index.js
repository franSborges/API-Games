const express = require("express");
const app = express();
const routes = require("./routes/routes");
const connection = require("./database/db-games");

connection.authenticate().then(() => {
  console.log("connected");
}).catch((err) => console.error(err));


app.use(express.json());
app.use(routes);


app.listen(3000);