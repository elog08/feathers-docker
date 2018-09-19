const assert = require('assert');
const app = require('../../lib/app');

describe('\'swarm\' service', () => {
  it('registered the service', () => {
    const service = app.service('swarm');

    assert.ok(service, 'Registered the service');
  });
});
