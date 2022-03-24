// const mockery = require('mockery')
// const sinon = require('sinon');
// const should = require('should');
// const httpMocks = require('node-mocks-http');
// const expect = require('chai').expect;

// describe('get-post-controller', () => {

//   beforeEach(() => {
//     mockery.enable({
//       warnOnReplace: false,
//       warnOnUnregistered: false,
//       useCleanCache: true
//     });
//   })

//   afterEach(function () {
//     mockery.disable();
//     mockery.deregisterAll();
//   });

//   it('should throw error', async () => {
//     const Post = function () {
//       throw 'error';
//     };

//     mockery.registerMock('../models/post-model', Post);
//     const { getPostController } = require('./get-post-controller');

//     try {
//       await getPostController({});
//     } catch (error) {
//       expect(error).to.be.equal('error');
//     }
//   });

// })
