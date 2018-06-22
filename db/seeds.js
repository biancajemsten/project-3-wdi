const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Bundle = require('../models/bundle');
const User = require('../models/user');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    firstname: 'Arabella',
    lastname: 'Dear',
    email: 'ab@test.com',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'Scotland',
    musicgenres: 'Jazz'
  },
  {
    firstname: 'Bianca',
    lastname: 'Jemsten',
    email: 'bj@test.com',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'Sweden',
    musicgenres: 'Swedish Pop'
  },
  {
    firstname: 'James',
    lastname: 'Newell',
    email: 'jn@test.com',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'London',
    musicgenres: 'Metal'
  }])
    .then(users => console.log(`${users.length} User(s) created`))
    .catch(err => console.log(err))
    .finally(() =>  mongoose.connection.close());
});
