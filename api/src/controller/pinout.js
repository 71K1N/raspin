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
  global.RASPBERRY[2] =500;
  res.json({
    "pin":pin,
    "mode":io,
    "variavel global":global.RASPBERRY[2]

  })
}

function set(req, res) {
  const pin = req.params.pin;
  const status = req.params.status;

  // PIN SETTADO COMO SAIDA - CRIAR OBJETO
  var pinout = new Gpio(pin, 'out');  
  pinout.writeSync(parseInt(status));      

  res.json({
    "pin":pin,
    "state": status,
    "variavel global":global.RASPBERRY[2]
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