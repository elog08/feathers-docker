// Initializes the `secrets` service on path `/secrets`
const createService = require('./secrets.class.js');
const hooks = require('./secrets.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/secrets', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('secrets');

  service.hooks(hooks);
};
