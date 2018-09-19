const assert = require('assert');
const app = require('../../lib/app');

describe('\'info\' service', () => {
  it('registered the service', () => {
    const service = app.service('info');

    assert.ok(service, 'Registered the service');
  });
});
