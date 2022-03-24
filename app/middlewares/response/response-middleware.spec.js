const mockery = require('mockery')
const sinon = require('sinon');
const should = require('should')
const httpMocks = require('node-mocks-http');
const expect = require('chai').expect;

describe('response-middleware', () => {

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

  it('should return response data with status 200', async () => {
    const res = httpMocks.createResponse();
    const spy = sinon.spy();

    const { responseMiddleware } = require('./response-middleware');
    await responseMiddleware({}, res, spy);
    should(res.statusCode).be.equal(200);
  })

})
