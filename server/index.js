const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;

const bodyParser = require("body-parser");

const routes = require('./routes.js');


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes)

app.listen(port, () => {
  console.log("Server started on port: " + port)
})