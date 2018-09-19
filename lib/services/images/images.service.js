// Initializes the `images` service on path `/images`
const createService = require('./images.class.js');
const hooks = require('./images.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');
  const docker = app.docker;
  
  const options = {
    paginate,
    docker
  };

  // Initialize our service with any options it requires
  app.use('/images', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('images');

  service.hooks(hooks);
};
