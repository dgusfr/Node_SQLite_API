const express = require('express');
const PessoaController = require('../controllers/pessoaController');

const router = express.Router();

router.get('/pessoas', PessoaController.getAll);

module.exports = router;
