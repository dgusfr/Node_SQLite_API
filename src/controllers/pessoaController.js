const { Pessoa } = require('../models');

class PessoaController {
  static async getAll(req, res) {
    try {
      const pessoas = await Pessoa.findAll();
      res.status(200).json(pessoas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar as pessoas.' });
    }
  }
}

module.exports = PessoaController;
