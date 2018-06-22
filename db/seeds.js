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

Bundle.create([{
  event: {
    name: 'Diamonds Are Forever',
    date: 'Friday 20th July 2018',
    location: {
      lat: 53.4767,
      lng: 2.2390
    }
  },
  bar: {
    name: 'The Alchemist',
    location: {
      lat: 53.4358,
      lng: 2.9576
    }
  },
  restaurant: {
    name: 'The Grill on New York Street',
    location: {
      lat: 53.2922,
      lng: 2.14407
    }
  },
  creator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }

}, {
  event: {
    name: 'Gentlemen\'s Dub Club',
    date: 'Friday 19th October 2018',
    location: {
      lat: 51.4602,
      lng: 0.1169
    }
  },
  bar: {
    name: String,
    location: {
      lat: Number,
      lng: Number
    }
  },
  restaurant: {
    name: String,
    location: {
      lat: Number,
      lng: Number
    }
  },
  creator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}]);
