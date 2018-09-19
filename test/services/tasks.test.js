const assert = require('assert');
const app = require('../../lib/app');

describe('\'tasks\' service', () => {
  it('registered the service', () => {
    const service = app.service('tasks');

    assert.ok(service, 'Registered the service');
  });
});
