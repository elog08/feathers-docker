// Initializes the `swarm` service on path `/swarm`
const createService = require('./swarm.class.js');
const hooks = require('./swarm.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/swarm', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('swarm');

  service.hooks(hooks);
};
