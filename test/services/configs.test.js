const assert = require('assert');
const app = require('../../lib/app');

describe('\'configs\' service', () => {
  it('registered the service', () => {
    const service = app.service('configs');

    assert.ok(service, 'Registered the service');
  });
});
