var Gpio = require('onoff').Gpio;

/**
 * Rotas de PINOUT
 */
module.exports.autoroute = {
  get: {
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


/**
 * Mode 
 * 
 * Define o modo de operação do pino em questão
 *  
 * @param {Object} req Requsição recebida
 * @param {Object} res Resposta para requisição
 */
function mode(req, res) {
  const io = req.params.mode == "i" ? "in" : "out";
  const pin = req.params.pin;

  global.RASPBERRY[pin] = new Gpio(pin, io);

  res.json({
    "pin": pin,
    "mode": io
  })
}

/**
 * Set
 * 
 * Seta o status do pino em questão. 0 ou 1 (ativo ou inativo) 
 * 
 * @param {Object} req Requsição recebida
 * @param {Object} res Resposta para requisição
 */
function set(req, res) {
  const pin = req.params.pin;
  const status = req.params.status;

  global.RASPBERRY[pin].writeSync(parseInt(status));

  res.json({
    "pin": pin,
    "state": status
  })
}

/**
* Status
* Retorna o status do pino em questão.
* @param {Object} req Requsição recebida
* @param {Object} res Resposta para requisição
*/
function status(req, res) {
  const pin = req.params.pin
  if (pin) {
    res.json({ pin, "status": 2 })
  } else {
    res.json("todos os pinos")
  }

}