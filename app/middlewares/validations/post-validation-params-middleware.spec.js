const mockery = require('mockery')
const sinon = require('sinon');
const should = require('should')
const httpMocks = require('node-mocks-http');
const expect = require('chai').expect;

describe('post-validation-params-middleware', () => {

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
      body: {
        image: 'image',
        tag: 'tag',
        text: 'text',
        title: 'title'
      }
    };

    const { postValidationParamsMiddleware } = require('./post-validation-params-middleware');
    await postValidationParamsMiddleware(req, res, spy);
    expect(spy.called).to.be.true;
  })

  it('should throw error with status code 400 when image prop does not exist', async () => {
    const res = httpMocks.createResponse();
    const spy = sinon.spy();

    const req = {
      body: {},
    };

    const { postValidationParamsMiddleware } = require('./post-validation-params-middleware');
    await postValidationParamsMiddleware(req, res, spy);
    expect(spy.called).to.be.false;
    should(res.statusCode).be.equal(400);
  })


  it('should throw error with status code 400 when tag prop does not exist', async () => {
    const res = httpMocks.createResponse();
    const spy = sinon.spy();

    const req = {
      body: {
        image: 'image',
      }
    };

    const { postValidationParamsMiddleware } = require('./post-validation-params-middleware');
    await postValidationParamsMiddleware(req, res, spy);
    expect(spy.called).to.be.false;
    should(res.statusCode).be.equal(400);
  })

  it('should throw error with status code 400 when text prop does not exist', async () => {
    const res = httpMocks.createResponse();
    const spy = sinon.spy();

    const req = {
      body: {
        image: 'image',
        tag: 'tag',
        title: 'title'
      }
    };

    const { postValidationParamsMiddleware } = require('./post-validation-params-middleware');
    await postValidationParamsMiddleware(req, res, spy);
    expect(spy.called).to.be.false;
    should(res.statusCode).be.equal(400);
  })

  it('should throw error with status code 400 when title prop does not exist', async () => {
    const res = httpMocks.createResponse();
    const spy = sinon.spy();

    const req = {
      body: {
        image: 'image',
        tag: 'tag',
        text: 'text'
      }
    };

    const { postValidationParamsMiddleware } = require('./post-validation-params-middleware');
    await postValidationParamsMiddleware(req, res, spy);
    expect(spy.called).to.be.false;
    should(res.statusCode).be.equal(400);
  })
})
