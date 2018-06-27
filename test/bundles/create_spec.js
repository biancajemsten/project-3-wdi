/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

const Bundle = require('../../models/bundle');

const bundleData = [{
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
  creator: {
    firstName: 'Arabella',
    lastName: 'Dear',
    email: 'ad@test.com',
    image: 'https://media.licdn.com/dms/image/C5103AQGzHzd2aQENcw/profile-displayphoto-shrink_800_800/0?e=1535587200&v=beta&t=RsmA095b5Houz0gHrLFabJEadDCc0mIQ_WdWwDh4p_I',
    password: '1234',
    passwordConfirmation: '1234',
    location: 'Scotland',
    musicGenres: ['Jazz']
  }
}];

let token;

xdescribe('POST /bundles', () => {

  beforeEach(done => {
    Bundle.remove({})
      .then(() => User.remove({}))
      .then(() => User.create({
        firstName: 'test',
        lastName: 'test',
        email: 'test',
        password: 'test',
        passwordConfirmation: 'test'
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '8h' });

        done();
      });
  });
});


it('should return a 401 response without a token', done => {
  api.post('/api/bundles')
    .end((err, res) => {
      expect(res.status).to.eq(401);
      done();
    });
});

it('should return a 201 response', done => {
  api.post('/api/bundles')
    .set('Authorization', `Bearer ${token}`)
    .end((err, res) => {
      expect(res.status).to.eq(201);
      done();
    });
});

it('should return an object', done => {
  api.post('/api/bundles')
    .set('Authorization', `Bearer ${token}`)
    .send(bundleData)
    .end((err, res) => {
      expect(res.body).to.be.an('object');
      done();
    });
});
