usuario = require("../model/model_usuario");
usuario = new usuario();

module.exports.autoroute = {
  //  - metodo http
  get: {
    '/usuario': get_all,
    '/usuario/:id': get
  },
  post: {
    '/usuario/:id': update,
    '/usuario': create
  },
  delete: {
    '/usuario/:id': del
  }
};

function get_all(req, res) {
  usuario.get_all(req, res);
}

function get(req, res) {
  usuario.get(req, res)
}

function create(req, res) {
  usuario.create(req, res)
}

function update(req, res) {
  usuario.update(req, res)
}

function del(req, res) {
  usuario.del(req, res)
}