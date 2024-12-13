const PessoaService = require('../services/pessoaService'); 

class PessoaController {
  static async getAll(req, res) {
    try {
      const pessoas = await PessoaService.pegaTodosOsRegistros();
      res.status(200).json(pessoas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PessoaController;
