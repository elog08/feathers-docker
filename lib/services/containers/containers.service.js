// Initializes the `containers` service on path `/containers`
const createService = require('./containers.class.js');
const hooks = require('./containers.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/containers', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('containers');

  service.hooks(hooks);
};
