/* global api, expect, describe, it, beforeEach */
const User = require('../../models/user');
const Bundle = require('../../models/bundle');
const jwt = require('jsonwebtoken');
const {secret} = require('../../config/environment');

const bundleData = {
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
  creator: '5b339202de502c3e1b971323',
  attendees: [{
    userId: '5b325bc4cbc256270346f579',
    firstName: 'Bianca',
    lastName: 'Jemsten'
  }]
};

let token;
let bundleId;

describe('/bundles/:id', () => {

  beforeEach(done => {
    Bundle.remove({})
      .then(() => Bundle.create(bundleData))
      .then(bundle => {
        bundleId = bundle._id;
      })
      .then(() => User.remove({}))
      .then(() => User.create({
        firstName: 'test',
        lastName: 'test',
        email: 'test@test.com',
        password: 'test',
        passwordConfirmation: 'test'
      }))
      .then(user => {
        token = jwt.sign({ sub: user._id}, secret, {expiresIn: '8h'});
        done();
      });
  });

  it('should return a 401 response without a token', done => {
    api.get(`/api/bundles/${bundleId}`)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 200 response', done => {
    api.get(`/api/bundles/${bundleId}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.get(`/api/bundles/${bundleId}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });
  // could add more keys to this test
  it('should return correct keys and values', done => {
    api.get(`/api/bundles/${bundleId}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body.event.name).to.eq(bundleData.event.name);
        expect(res.body.bar.name).to.eq(bundleData.bar.name);
        expect(res.body.restaurant.name).to.eq(bundleData.restaurant.name);
        done();
      });
  });
});
