const debug = require('debug');
const services = require('./services');
const Base = require('./base');

module.exports = function init (options) {
  return services(options);
};
