// Initializes the `auth` service on path `/auth`
const createService = require('./auth.class.js');
const hooks = require('./auth.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/auth', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('auth');

  service.hooks(hooks);
};
