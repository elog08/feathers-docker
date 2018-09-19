const assert = require('assert');
const app = require('../../lib/app');

describe('\'volumes\' service', () => {
  it('registered the service', () => {
    const service = app.service('volumes');

    assert.ok(service, 'Registered the service');
  });
});
