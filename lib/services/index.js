const Base = require('../base');
const debug = require('debug')('feathers-docker');
const containers = require('./containers/containers.service.js');
const images = require('./images/images.service.js');
const networks = require('./networks/networks.service.js');
const volumes = require('./volumes/volumes.service.js');
const exec = require('./exec/exec.service.js');
const swarm = require('./swarm/swarm.service.js');
const node = require('./node/node.service.js');
const services = require('./services/services.service.js');
const tasks = require('./tasks/tasks.service.js');
const secrets = require('./secrets/secrets.service.js');
const configs = require('./configs/configs.service.js');
const plugins = require('./plugins/plugins.service.js');
const auth = require('./auth/auth.service.js');
const info = require('./info/info.service.js');
const version = require('./version/version.service.js');
const ping = require('./ping/ping.service.js');
const events = require('./events/events.service.js');
const distribution = require('./distribution/distribution.service.js');

module.exports = function (options) {
  debug('Initializing docker with options');
  const docker = new Base();
  docker.setup();
  
 return function (app) {
    app.docker = docker;
    app.configure(containers);
    app.configure(images);
    app.configure(networks);
    app.configure(volumes);
    app.configure(exec);
    app.configure(swarm);
    app.configure(node);
    app.configure(services);
    app.configure(tasks);
    app.configure(secrets);
    app.configure(configs);
    app.configure(plugins);
    app.configure(auth);
    app.configure(info);
    app.configure(version);
    app.configure(ping);
    app.configure(events);
    app.configure(distribution);
  };
}