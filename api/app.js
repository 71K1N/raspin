const autoroute = require("express-autoroute");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();
const baseDir = path.join(__dirname, "./src/controller");

app.use(bodyParser.json());
global.RASPBERRY= [];
global.RASPBERRY[2]="teste"

autoroute(app, {
  throwErrors: false,
  logger: require("winston"),
  routesDir: baseDir
});

module.exports = app;
