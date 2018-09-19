// Initializes the `configs` service on path `/configs`
const createService = require('./configs.class.js');
const hooks = require('./configs.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/configs', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('configs');

  service.hooks(hooks);
};
