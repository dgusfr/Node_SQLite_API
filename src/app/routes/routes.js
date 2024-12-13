const express = require('express');
const personRoutes = require('./app/routes/personRoutes');

module.exports = (app) => {
  app.use(express.json());
  app.use('/api', personRoutes);
};