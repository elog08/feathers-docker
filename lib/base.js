/* A class that represent a Docker connection to be injected into services */
const { Docker } = require('node-docker-api');
const debug = require('debug')('feathers-docker');

class Base {
  constructor (opts = false) {
    const _defaultOpts = { config: {
       socketPath: '/var/run/docker.sock' 
    } };
    if (!opts) {
      debug('No options passed, initializing new docker connection with default settings');
    }
    let _opts = opts || _defaultOpts;

    this.config = _opts.config;
    this.docker = null;
  }
  
  async setup () {
    if (!this.docker) {
      try {
        this.docker = new Docker(this.config);
      } catch (e) {
        debug('Error', e);
        throw new Error('Error initializing Docker');
      }
    }
  }
}

module.exports = Base;
