const chai = require('chai');
const dirtyChai = require('dirty-chai');
const Base = require('../lib/base');
const debug = require('debug')('feathers-docker');

chai.use(dirtyChai);

const { expect } = chai;

describe('feathers-docker', () => {
  it('docker base class', () => {
    expect(typeof Base).to.equal('function', 'It worked');
  });
  it('instantiates', () => {
    const docker = new Base();
    expect(docker.config).to.be.ok();
  });
  it('accepts config overrides', () => {
    const config = { socketPath: '/var/run/docker.sock' };
    const docker = new Base({config});
    expect(docker.config).to.eql(config);
  });
  it('initializes docker connection', async () => {
    const config = { socketPath: '/var/run/docker.sock' };
    const docker = new Base({config});
    expect(docker.docker).to.not.be.ok();
    await docker.setup();
    expect(docker.docker).to.be.ok();
  });
});
