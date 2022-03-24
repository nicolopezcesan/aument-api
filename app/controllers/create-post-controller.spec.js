const mockery = require('mockery')
const sinon = require('sinon');
const should = require('should');
const httpMocks = require('node-mocks-http');
const expect = require('chai').expect;

describe('create-post-controller', () => {

  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
  })

  afterEach(function () {
    mockery.disable();
    mockery.deregisterAll();
  });

  it('should return post model', async () => {
    const Post = function () {
      this.save = () => true;
    };

    mockery.registerMock('../models/post-model', Post);

    const { createPostController } = require('./create-post-controller');
    const result = await createPostController({});
    expect(result).to.be.true;
  });

  it('should throw error', async () => {
    const Post = function () {
      throw 'error';
    };
    
    mockery.registerMock('../models/post-model', Post);
    const { createPostController } = require('./create-post-controller');

    try {
      await createPostController({});
    } catch (error) {
      expect(error).to.be.equal('error');
    }
  });

})
