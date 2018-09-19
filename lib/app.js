const express = require('@feathersjs/express');
const feathers = require('@feathersjs/feathers');
const docker = require('./index.js');
const app = express(feathers());
app.configure(docker());
module.exports = app;
