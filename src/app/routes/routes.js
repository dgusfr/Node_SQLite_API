const express = require('express');
const pessoaRoutes = require('./routes/pessoaRoutes');

module.exports = (app) => {
  app.use(
    express.json,
    pessoaRoutes,
  );
};
