pessoa = require("../model/model_pessoa");
pessoa = new pessoa();

module.exports.autoroute = {
  //  - metodo http
  get: {
    '/pessoa': get_all,
    '/pessoa/:id': get
  },
  post: {
    '/pessoa/:id': update,
    '/pessoa': create
  },
  delete: {
    '/pessoa/:id': del
  }
};

function get_all(req, res) {
  pessoa.get_all(req, res);
}

function get(req, res) {
  pessoa.get(req, res)
}

function create(req, res) {
  pessoa.create(req, res)
}

function update(req, res) {
  pessoa.update(req, res)
}

function del(req, res) {
  pessoa.del(req, res)
}