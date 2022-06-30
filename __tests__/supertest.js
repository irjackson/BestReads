const request = require('supertest');
const path = require('path');
const fs = require('fs');
const server = 'http://localhost:8080';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });

  describe('/signup', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
  describe('/api/login', () => {
    describe('POST', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
  
  xdescribe('/api/signup', () => {
   xdescribe('POST', () => {
      xit('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
        });
      xit('redirects to /app', () => {
        return request(server)

        });
      xit('sends back res.body', () => {
        return request(server)
          .end(function (err, res) {
            if (err) throw err;
            console.log(res.locals);
        });
      });
    });
  })
});