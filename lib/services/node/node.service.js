// Initializes the `node` service on path `/node`
const createService = require('./node.class.js');
const hooks = require('./node.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/node', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('node');

  service.hooks(hooks);
};
