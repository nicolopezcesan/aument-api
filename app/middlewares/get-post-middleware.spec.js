const mockery = require('mockery')
const sinon = require('sinon');
const should = require('should')
const httpMocks = require('node-mocks-http');
const expect = require('chai').expect;

describe('get-post-middleware', () => {

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

    mockery.registerMock('../controllers/get-post-controller', {
      getPostController: async () => true
    });

    const req = { query: { id: 123 } };
    const { getPostMiddleware } = require('./get-post-middleware');
    await getPostMiddleware(req, res, spy);
    expect(spy.called).to.be.true;
  })

  it('should throw error with status code 500', async () => {
    const res = httpMocks.createResponse();
    const req = { query: {} };

    mockery.registerMock('../controllers/get-post-controller', {
      getPostController: async () => { throw Error('error') }
    });

    const { getPostMiddleware } = require('./get-post-middleware');
    await getPostMiddleware(req, res, () => { });
    should(res.statusCode).be.equal(500);
  })
})
