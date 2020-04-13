const pinout = require("../model/model_pinout.js");
pin = new pinout();

module.exports.autoroute = {

  put: {
    "/pinout/mode/:pin/:io": mode,
    "/equipamento/teste": teste
  },
  post: {
    "/:pin/:status": set,
    
  }
};

function mode(req, res) {

  pin.mode(req, res);
}

function set(req, res) {
  pin.set(req, res);  
}