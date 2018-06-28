/* global beforeEach, describe, it, api, expect */

const User = require('../../models/user');
const userData = {
  firstName: 'test',
  lastName: 'test',
  email: 'test@test',
  password: 'test',
  passwordConfirmation: 'test'
};

describe('POST /login', () => {

  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(() => {
        done();
      });
  });

  it('should return a 401 response if not registered', done => {
    api.post('/api/login')
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });


  it('should return a 200 response if registered', done => {
    api.post('/api/login')
      .send(userData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

});
