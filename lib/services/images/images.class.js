/* eslint-disable no-unused-vars */
const debug = require('debug')('feathers-docker');
const errors = require('@feathersjs/errors');

class Service {
  constructor (options) {
    debug('Service init: Image', options);
    this.options = options || {};
    
    // TODO: Cleaner way, avoid double nest
    this.docker = this.options.docker.docker;
  }

  async find(params) {
    try {
      const images = await this.docker.image.list();
      let data = await Promise.all(images.map(c => this.get(c.id)));
      data = data.filter(img => !!img.name);
      return {
        total: data.length,
        data
      };
    }
    catch (e) {
      debug('Images:find error', e);
    }
  }

  async get(_id, params) {
    try {
      const image = await this.docker.image.get(_id);
      const { data: { RepoTags: [name]} } = await image.status();
      return {_id, name};
    }
    catch (e) {
      debug('Images:get error', e);
      if (e.statusCode && e.statusCode === 404)
        {
          new errors.NotFound(e.reason);
        }
      return null;
    }
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }
    const image = await this.docker.image.create({});
    console.log(image);
    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
