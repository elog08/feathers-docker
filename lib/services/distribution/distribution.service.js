// Initializes the `distribution` service on path `/distribution`
const createService = require('./distribution.class.js');
const hooks = require('./distribution.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/distribution', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('distribution');

  service.hooks(hooks);
};
