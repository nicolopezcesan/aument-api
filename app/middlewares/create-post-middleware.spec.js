const mockery = require('mockery')
const sinon = require('sinon');
const should = require('should')
const httpMocks = require('node-mocks-http');
const expect = require('chai').expect;

describe('create-post-middleware', () => {

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

  it('should to continue next middleware', async () => {
    const res = httpMocks.createResponse();
    const spy = sinon.spy();

    mockery.registerMock('../controllers/create-post-controller', {
      createPostController: async () => true
    });

    const req = { body: {} };
    const { createPostMiddleware } = require('./create-post-middleware');
    await createPostMiddleware(req, res, spy);
    expect(req.response).to.be.true;
    expect(spy.called).to.be.true;
  })

  it('create post controller should throw error', async () => {
    const res = httpMocks.createResponse();

    mockery.registerMock('../controllers/create-post-controller', {
      createPostController: () => {
        throw 'error'
      }
    });

    const { createPostMiddleware } = require('./create-post-middleware');
    await createPostMiddleware({}, res, () => { });
    should(res.statusCode).be.equal(500);
  })
})
