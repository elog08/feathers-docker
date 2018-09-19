const assert = require('assert');
const app = require('../../lib/app');

describe('\'images\' service', () => {
  it('registered the service', () => {
    const service = app.service('images');

    assert.ok(service, 'Registered the service');
  });
});
