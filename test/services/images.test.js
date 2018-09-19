const assert = require('assert');
const app = require('../../lib/app');
const chai = require('chai');
const dirtyChai = require('dirty-chai');

chai.use(dirtyChai);

const { expect } = chai;

describe('\'images\' service', () => {
  it('registered the service', () => {
    const service = app.service('images');
    assert.ok(service, 'Registered the service');
  });
  describe('CRUD', () => {
    let service;
    before(() => {
      service = app.service('images');
    });
    
    it ('finds all', async () => {
      const all = await service.find({});
      expect(all).to.be.ok();
      expect(all.data).to.be.ok();
      expect(all.data).to.be.a('array');
      expect(all.total).to.be.a('number');
    });
    
    xit ('creates an instance', async () => {
      const instance = await service.create({});
      expect(instance).be.ok();
    });
    
    xit ('deletes an instance', async () => {
      const instance = await service.create({});
      expect(instance).be.ok();
      await service.delete(instance._id);
      try {
        await instance.get(instance._id);
      } catch (e) {
        expect(e).to.be.an.instanceof(Error)
      }
    });
  
    it ('gets an instance', async () => {
      const all = await service.find({});
      const instanceId = all.data[0]._id;
      const instance = await service.get(instanceId);
      expect(instance._id).to.eql(instanceId);
    });
  });
});
