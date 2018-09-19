const assert = require('assert');
const app = require('../../lib/app');

describe('\'plugins\' service', () => {
  it('registered the service', () => {
    const service = app.service('plugins');

    assert.ok(service, 'Registered the service');
  });
});
