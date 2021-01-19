//sql = require("../libs/conexao");

class Usuario {
  /**
   * Geta All
   *
   * Lista todas as pesssoas
   * @param {*} req
   * @param {*} res
   */
  get_all(req, res) {
    sql.query("Select * from usuario ", function(err, result, field) {
      if (err) {
        res.status(500).json(err.sqlMessage);
      } else {
        if (result.length > 0) {
          res.status(200).json(result);
        } else {
          res.status(204).json(result);
        }
      }
    });
  }

  /**
   * Get
   *
   * Seleciona um registro da tabela usuario
   * @param {*} req
   * @param {*} res
   */
  get(req, res) {
    sql.query("Select * from usuario where id= ? ", [req.params.id], function(
      err,
      result,
      field
    ) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        if (result.length > 0) {
          res.status(200).json(result);
        } else {
          res.status(200).json({
            dados: result.length
          });
        }
      }
    });
  }

  /**
   * Salvar
   *
   * Salva um novo registro usuario no banco de dados
   * @param {*} req
   * @param {*} res
   */
  create(req, res) {
    sql.query(
      "Insert into usuario(dsc_login,senha,id_pessoa) values( ? , ? , ?)",
      [req.body.dsc_login, req.body.senha, req.body.id_pessoa],
      function(err, result, field) {
        if (err) {
          res.status(500).json({
            Erro: err
          });
        } else {
          res.status(201).json(result.insertId);
        }
      }
    );
  }

  /**
   * Update
   *
   * Atualiza o resgistro
   * @param {*} req
   * @param {*} res
   */
  update(req, res) {
    sql.query("Update usuario set ? ", [req.body], function(
      err,
      result,
      field
    ) {
      if (err) {
        console.log("error: ", err);
        res.status(500).json("Erro");
        //result(err, null);
      } else {
        res.status(201).json("ok");
      }
    });
  }

  /**
   * Del
   * Exclui um registro da base de dados
   * @param {*} req
   * @param {*} res
   */
  del(req, res) {
    sql.query("delete from usuario where id= ? ", [req.params.id], function(
      err,
      result,
      field
    ) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(result);
        res.status(200).json({
          Resultado: "Excluido com sucesso"
        });
      }
    });
  }
}
module.exports = Usuario;
