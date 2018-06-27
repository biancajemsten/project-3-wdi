/* global beforeEach, describe, it, api, expect */

const User = require('../../models/user');
const userData = {
  firstName: 'test',
  lastName: 'test',
  email: 'test@test',
  password: 'test',
  passwordConfirmation: 'test'
};

describe('POST /register', () => {

  beforeEach(done => {
    User.remove({})
      .then(() => done());
  });

  it('should return a 201 response', done => {
    api.post('/api/register')
      .send(userData)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });

});
