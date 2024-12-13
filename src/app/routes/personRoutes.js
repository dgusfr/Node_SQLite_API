const express = require('express');
const PersonController = require('../controllers/PersonController');
const router = express.Router();

router.get('/people', (req, res, next) => new PersonController().getAll(req, res, next));
router.post('/people', (req, res, next) => new PersonController().create(req, res, next));
router.put('/people/:id', (req, res, next) => new PersonController().update(req, res, next));
router.delete('/people/:id', (req, res, next) => new PersonController().delete(req, res, next));
router.get('/people/:id', (req, res, next) => new PersonController().getById(req, res, next));

module.exports = router;