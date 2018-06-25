const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Bundle = require('../models/bundle');
const User = require('../models/user');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([{
    firstName: 'Arabella',
    lastName: 'Dear',
    email: 'ab@test.com',
    image: 'http://www.midlandstruckvan.com/wp-content/uploads/2016/01/nrc-female-silhouette-large-485x323.png',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'Scotland',
    musicGenres: 'Jazz'
  },
  {
    firstName: 'Bianca',
    lastName: 'Jemsten',
    email: 'bj@test.com',
    image: 'http://www.midlandstruckvan.com/wp-content/uploads/2016/01/nrc-female-silhouette-large-485x323.png',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'Sweden',
    musicGenres: 'Swedish Pop'
  },
  {
    firstName: 'James',
    lastName: 'Newell',
    email: 'jn@test.com',
    image: 'http://getdrawings.com/img/facebook-silhouette-female-22.png',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'London',
    musicGenres: 'Metal'
  }])
    .then(users => {
      console.log(`${users.length} User(s) created`);
      return Bundle.create([{
        event: {
          name: 'Diamonds Are Forever',
          date: '2018-06-20',
          location: {
            lat: 53.4767,
            lng: -2.2390
          }
        },
        bar: {
          name: 'The Alchemist',
          location: {
            lat: 53.4358,
            lng: -2.9576
          }
        },
        restaurant: {
          name: 'The Grill on New York Street',
          location: {
            lat: 53.2922,
            lng: -2.14407
          }
        },
        creator: users[0]

      }, {
        event: {
          name: 'Gentlemen\'s Dub Club',
          date: '2018-10-19',
          location: {
            lat: 51.4602,
            lng: -0.1169
          }
        },
        bar: {
          name: 'The Blues Kitchen',
          location: {
            lat: 51.460313,
            lng: -0.120439
          }
        },
        restaurant: {
          name: 'Trinity Arms',
          location: {
            lat: 51.4619,
            lng: -0.1188
          }
        },
        creator: users[1]
      }]);
    })
    .then(bundles => console.log(`${bundles.length} Bundle(s) created`))
    .catch(err => console.log(err))
    .finally(() =>  mongoose.connection.close());
});
