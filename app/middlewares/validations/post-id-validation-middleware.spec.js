const mockery = require('mockery')
const sinon = require('sinon');
const should = require('should')
const httpMocks = require('node-mocks-http');
const expect = require('chai').expect;

describe('post-id-validation-middleware', () => {

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

    const req = {
      query: {},
      body: {
        id: '123'
      },
    };

    const { postIdValidationMiddleware } = require('./post-id-validation-middleware');
    await postIdValidationMiddleware(req, res, spy);
    expect(spy.called).to.be.true;
  })

  it('should throw error with status code 400', async () => {
    const res = httpMocks.createResponse();
    const spy = sinon.spy();

    const req = {
      query: {},
      body: {},
    };

    const { postIdValidationMiddleware } = require('./post-id-validation-middleware');
    await postIdValidationMiddleware(req, res, spy);
    expect(spy.called).to.be.false;
    should(res.statusCode).be.equal(400);
  })
})
