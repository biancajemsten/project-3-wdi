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
    email: 'ad@test.com',
    image: 'https://media.licdn.com/dms/image/C5103AQGzHzd2aQENcw/profile-displayphoto-shrink_800_800/0?e=1535587200&v=beta&t=RsmA095b5Houz0gHrLFabJEadDCc0mIQ_WdWwDh4p_I',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'Scotland',
    musicGenres: [{
      genre: 'Jazz'
    }]
  },
  {
    firstName: 'Bianca',
    lastName: 'Jemsten',
    email: 'bj@test.com',
    image: 'https://media.licdn.com/dms/image/C5603AQGP8ydXXjyNfw/profile-displayphoto-shrink_200_200/0?e=1535587200&v=beta&t=LWRubHnaKF4b7smqh27er3vnUFtcf6UxgwiF7A8sS2A',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'Sweden',
    musicGenres: [{
      genre: 'Swedish Pop'
    }, {
      genre: 'Rock'
    }]
  },
  {
    firstName: 'James',
    lastName: 'Newell',
    email: 'jn@test.com',
    image: 'https://media.licdn.com/dms/image/C4D03AQHazaIQs2xaYQ/profile-displayphoto-shrink_200_200/0?e=1535587200&v=beta&t=D57hH_MeggXFnIW7n98oGzfrPcnRfUyKbdFCviN6F9o',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'London',
    musicGenres: [{
      genre: 'Metal'
    }]
  }])
    .then(users => {
      console.log(`${users.length} User(s) created`);
      return Bundle.create([{
        event: {
          name: 'Diamonds Are Forever',
          date: '2018-06-20',
          venue: 'Night People MCR',
          address: '105-107 Princess Street, Manchester, M1 6DD',
          ticketPrice: '£2.00',
          description: 'Manchester/’s Glam Rock extravaganza returns with a special night dedicated to the greatest rock band of all time, The Rolling Stones!',
          startTime: '11pm',
          eventType: 'Concert',
          location: {
            lat: 53.4767,
            lng: -2.2390
          }
        },
        bar: {
          name: 'Grey Horse Inn',
          address: '80 Portland St, Manchester M1 4QX',
          website: '',
          openingHours: {
            monday: '11am - 12am',
            tuesday: '11am - 12am',
            wednesday: '11am - 12am',
            thursday: '11am - 12am',
            friday: '11am - 1am',
            saturday: '11am - 1am',
            sunday: '12pm - 12am'
          },
          location: {
            lat: 53.477967,
            lng: -2.239833
          }
        },
        restaurant: {
          name: 'Happy Seasons',
          address: '59 Faulkner St, Manchester M1 4FF',
          website: 'https://happyseasons.in/',
          openingHours: {
            monday: '12-10:30pm',
            tuesday: '12-10:30pm',
            wednesday: '12-10:30pm',
            thursday: '12-10:30pm',
            friday: '12-11pm',
            saturday: '12-11pm',
            sunday: '12-9pm'
          },
          location: {
            lat: 53.478226,
            lng: -2.240074
          }
        },
        creator: users[0]

      }, {
        event: {
          name: 'Gentlemen\'s Dub Club',
          date: '2018-06-29',
          venue: 'Brighton Racecourse',
          address: 'Brighton Racecourse, Freshfield Rd, Brighton BN2 9XZ',
          ticketPrice: '£39.50',
          description: 'After a triumphant return in 2017 Gentlemen\'s Dub Club are set to headline here at Brighton Racecourse in the summer of 2018.',
          startTime: '4:00pm',
          eventType: 'Concert',
          location: {
            lat: 50.829384,
            lng: -0.112589
          }
        },
        bar: {
          name: 'Fox on the Downs',
          address: '291 Elm Grove, Brighton BN2 3EA',
          website: '',
          openingHours: {
            monday: '11am - 11pm',
            tuesday: '11am - 11pm',
            wednesday: '11am - 11pm',
            thursday: '11am - 11pm',
            friday: '11am - 11pm',
            saturday: '11am - 11pm',
            sunday: '11am - 11pm'
          },
          location: {
            lat: 50.832101,
            lng: -0.112525
          }
        },
        restaurant: {
          name: 'Garden Kitchen',
          address: 'Warren Rd, Brighton BN2 6BA',
          website: 'wyevalegardencentres.co.uk',
          openingHours: {
            monday: '9am - 5pm',
            tuesday: '9am - 5pm',
            wednesday: '9am - 5pm',
            thursday: '9am - 5pm',
            friday: '9am - 5pm',
            saturday: '9am - 5pm',
            sunday: '10am - 4pm'
          },
          location: {
            lat: 50.830983,
            lng: -0.111345
          }
        },
        creator: users[1]
      }, {
        event: {
          name: 'Lower Than Atlantis',
          date: '2018-03-24',
          venue: 'The Plug',
          address: '14-16 MATILDA STREET, SHEFFIELD, SHEFFIELD, S1 4QD',
          ticketPrice: '£21',
          description: 'Lower Than Atlantis are an English rock band, formed in 2007 and based in Watford',
          startTime: '8pm',
          eventType: 'Concert',
          location: {
            lat: 53.376746,
            lng: -1.471292
          }
        },
        bar: {
          name: 'Rutland Arms',
          address: '86 Brown St, Sheffield S1 2BS',
          website: 'http://www.therutlandarmssheffield.co.uk/',
          openingHours: {
            monday: '12pm - 11pm',
            tuesday: '12pm - 11pm',
            wednesday: '12pm - 11pm',
            thursday: '12pm - 11pm',
            friday: '12pm - 12am',
            saturday: '12pm - 12am',
            sunday: '12pm - 11pm'
          },
          location: {
            lat: 53.376576,
            lng: -1.467344
          }
        },
        restaurant: {
          name: 'Fresh Choice noodlebar',
          address: '21-23 Matilda St, Sheffield S1 4QB',
          website: '',
          openingHours: {
            monday: '11:30am-11pm',
            tuesday: '11:30am-11pm',
            wednesday: '11:30am-11pm',
            thursday: '11:30am-11pm',
            friday: '11:30am-11pm',
            saturday: '11:30am-11pm',
            sunday: '11:30am-10pm'
          },
          location: {
            lat: 53.376658,
            lng: -1.471142
          }
        },
        creator: users[2]

      }]);
    })
    .then(bundles => console.log(`${bundles.length} Bundle(s) created`))
    .catch(err => console.log(err))
    .finally(() =>  mongoose.connection.close());
});
