const express = require('@feathersjs/express');
const feathers = require('@feathersjs/feathers');
const services = require('./services');
const app = express(feathers());
app.configure(services);
module.exports = app;
