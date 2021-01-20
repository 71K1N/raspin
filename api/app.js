const autoroute = require("express-autoroute");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();
const baseDir = path.join(__dirname, "./src/controller");

app.use(bodyParser.json());

//  - objeto contendo os pinos setados do raspberry
global.RASPBERRY= [];


autoroute(app, {
  throwErrors: false,
  logger: require("winston"),
  routesDir: baseDir
});

module.exports = app;
