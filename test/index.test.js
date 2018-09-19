const { expect } = require('chai');
const plugin = require('../lib');

describe('feathers-docker', () => {
  it('basic functionality', () => {
    expect(typeof plugin).to.equal('function', 'It worked');
  });
});
