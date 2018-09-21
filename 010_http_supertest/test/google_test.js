'use strict'

const request = require('supertest')('http://www.google.com/');
const assert = require('chai');

describe('Single GET', function() {
  it('Google\'s /users does not exist', function(done) {
    request
      .get('/user')
      .expect(404, done);
  });
  it('Google\'s / exists', function(done) {
    request
      .get('/')
      .expect(200, done);
  });
});

describe('Chained GET', function() {
  it('Google\'s /user does not exit, Google\'s / exists.', function() {
    return request
     .get('/users')
     .set('Accept', 'application/json')
     .expect(404)
     .then(response => {
       //assert(response.body.email, 'foo@bar.com')
       return request.get('/').expect(200);
     })
  });
});
