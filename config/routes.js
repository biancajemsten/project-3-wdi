const router = require('express').Router();
const bundles = require('../controllers/bundles');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const skiddle = require('../controllers/skiddle');
const secureRoute = require('../lib/secureRoute');
const googlePlaceSearch = require('../controllers/googlePlaceSearch');
const googlePlaceDetails = require('../controllers/googlePlaceDetails');
const googlePlacePhotos = require('../controllers/googlePlacePhotos');
const citymapperTravelTime = require('../controllers/citymapperTravelTime');

router.route('/bundles')
  .get(secureRoute, bundles.index)
  .post(secureRoute, bundles.create);

router.route('/bundles/:id')
  .get(secureRoute, bundles.show)
  .put(secureRoute, bundles.update)
  .delete(secureRoute, bundles.delete);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(users.update);

router.post('/bundles/:id/attendees', secureRoute, bundles.attendeeCreate);
router.delete('/bundles/:id/attendees/:attendeeId', secureRoute, bundles.attendeeDelete);

router.get('/events', skiddle.eventFinder);

router.get('/findPlaces', googlePlaceSearch.findGooglePlaces);
router.get('/findDetails', googlePlaceDetails.findPlaceDetails);
router.get('/findPhotos', googlePlacePhotos.findPlacePhotos);
router.get('/travelTime', citymapperTravelTime.getTravelTime);
router.get('/coverageTest', citymapperTravelTime.coverageTest);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
