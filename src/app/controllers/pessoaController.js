const Controller = require('./Controller.js');
const PessoaServices = require('../services/pessoaService.js');
const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }
}

module.exports = PessoaController;
