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
  res.json(req.params)
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