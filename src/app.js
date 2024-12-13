const express = require('express');
const routes = require('./app/routes'); 

const app = express();

routes(app); 

module.exports = app;
