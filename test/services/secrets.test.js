const assert = require('assert');
const app = require('../../lib/app');

describe('\'secrets\' service', () => {
  it('registered the service', () => {
    const service = app.service('secrets');

    assert.ok(service, 'Registered the service');
  });
});
