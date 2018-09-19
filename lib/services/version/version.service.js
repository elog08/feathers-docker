// Initializes the `version` service on path `/version`
const createService = require('./version.class.js');
const hooks = require('./version.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/version', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('version');

  service.hooks(hooks);
};
