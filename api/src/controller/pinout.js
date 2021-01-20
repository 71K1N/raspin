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

  var pinout = new Gpio(pin,io);

  res.json({"pin":pin,"mode":io})
}

function set(req, res) {
  const pin = req.params.pin;
  const status = req.params.status;

  // PIN SETTADO COMO SAIDA - CRIAR OBJETO
  var pinout = new Gpio(pin, 'out');  
  LED.writeSync(status);      

  res.json({
    "pin":pin,
    "state": status
  })
}

function status(req,res) {
  const pin = req.params.pin
  if (pin) {
    res.json({pin,"status":2})
  }else{
    res.json("todos os pinos")
  }
  
}