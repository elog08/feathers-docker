const assert = require('assert');
const app = require('../../lib/app');

describe('\'services\' service', () => {
  it('registered the service', () => {
    const service = app.service('services');

    assert.ok(service, 'Registered the service');
  });
});
