const assert = require('assert');
const app = require('../../lib/app');

describe('\'containers\' service', () => {
  it('registered the service', () => {
    const service = app.service('containers');

    assert.ok(service, 'Registered the service');
  });
});
