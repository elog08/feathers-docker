const assert = require('assert');
const app = require('../../lib/app');

describe('\'version\' service', () => {
  it('registered the service', () => {
    const service = app.service('version');

    assert.ok(service, 'Registered the service');
  });
});
