const Gpio = require("onoff").Gpio;
class PinOut {
  mode(req, res) {
    const pin = req.params.pin;
    const mode = req.params.io === "o" ? "out" : "in";

    try {
      if (mode === "in") {
        const gpioPin = new Gpio(pin, mode, "none");
      } else {
        const gpioPin = new Gpio(pin, mode);
      }
      res.status(201).json({
        pin,
        mode,
      });
    } catch (error) {
      res.status(200).json(error);
    }
  }
  set(req, res) {
    const pin = req.params.pin;
    const status = req.params.status;

    try {

      const gpioPin = new Gpio(pin);
      gpioPin.writeSync(status)
      res.status(201).json({
        pin,
        status,
      });
    } catch (error) {
      res.status(200).json(error);
    }
  }
}
module.exports = PinOut;