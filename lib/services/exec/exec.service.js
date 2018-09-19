// Initializes the `exec` service on path `/exec`
const createService = require('./exec.class.js');
const hooks = require('./exec.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/exec', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('exec');

  service.hooks(hooks);
};
