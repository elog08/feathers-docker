const assert = require('assert');
const app = require('../../lib/app');

describe('\'networks\' service', () => {
  it('registered the service', () => {
    const service = app.service('networks');

    assert.ok(service, 'Registered the service');
  });
});
