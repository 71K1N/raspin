var Gpio = require('onoff').Gpio;

module.exports.autoroute = {
get:{  
  "/pinout/:pin": status,
  "/pinout/": status,

},
  put: {
    "/pinout/mode/:pin/:mode": mode,
  },
  post: {
    "/pinout/:pin/:status": set,
  }
};

function mode(req, res) {
  const io = req.params.mode == "i"?"in":"out";
  const pin = req.params.pin;

  var pin = new Gpio(pin,io);

  res.json({"pin":pin,"mode":io})
}

function set(req, res) {
  res.json(req.params)
}

function status(req,res) {
  const pin = req.params.pin
  if (pin) {
    res.json({pin,"status":2})
  }else{
    res.json("todos os pinos")
  }
  
}