const express = require('express');
const PessoaController = require('../controllers/pessoaController'); // Caminho correto dentro de app/routes

const router = express.Router();

router.get('/pessoas', PessoaController.getAll);
router.post('/pessoas', PessoaController.criar);
router.put('/pessoas/:id', PessoaController.atualizar);
router.delete('/pessoas/:id', PessoaController.deletar);
router.get('/pessoas/:id', PessoaController.buscarPorId);

module.exports = router;
