// Initializes the `volumes` service on path `/volumes`
const createService = require('./volumes.class.js');
const hooks = require('./volumes.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/volumes', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('volumes');

  service.hooks(hooks);
};
