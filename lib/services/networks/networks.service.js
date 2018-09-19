// Initializes the `networks` service on path `/networks`
const createService = require('./networks.class.js');
const hooks = require('./networks.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/networks', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('networks');

  service.hooks(hooks);
};
