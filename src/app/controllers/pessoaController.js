const PessoaServices = require('../services/pessoaService');
const pessoaServices = new PessoaServices();

class PessoaController {
  static async getAll(req, res) {
    try {
      const pessoas = await pessoaServices.pegaTodosOsRegistros();
      res.status(200).json(pessoas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PessoaController;
