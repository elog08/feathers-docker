const assert = require('assert');
const app = require('../../lib/app');

describe('\'events\' service', () => {
  it('registered the service', () => {
    const service = app.service('events');

    assert.ok(service, 'Registered the service');
  });
});
