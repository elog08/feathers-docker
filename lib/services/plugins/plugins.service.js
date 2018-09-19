// Initializes the `plugins` service on path `/plugins`
const createService = require('./plugins.class.js');
const hooks = require('./plugins.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/plugins', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('plugins');

  service.hooks(hooks);
};
