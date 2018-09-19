const assert = require('assert');
const app = require('../../lib/app');

describe('\'distribution\' service', () => {
  it('registered the service', () => {
    const service = app.service('distribution');

    assert.ok(service, 'Registered the service');
  });
});
