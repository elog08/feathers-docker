// Initializes the `tasks` service on path `/tasks`
const createService = require('./tasks.class.js');
const hooks = require('./tasks.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tasks', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('tasks');

  service.hooks(hooks);
};
