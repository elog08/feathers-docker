const assert = require('assert');
const app = require('../../lib/app');

describe('\'exec\' service', () => {
  it('registered the service', () => {
    const service = app.service('exec');

    assert.ok(service, 'Registered the service');
  });
});
