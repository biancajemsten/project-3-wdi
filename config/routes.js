const router = require('express').Router();
const bundles = require('../controllers/bundles');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const skiddle = require('../controllers/skiddle');
const secureRoute = require('../lib/secureRoute');
const googlePlaceSearch = require('../controllers/googlePlaces');
const googlePlaceDetails = require('../controllers/googlePlaces');
const citymapper = require('../controllers/citymapper');


router.route('/bundles')
  .get(secureRoute, bundles.index)
  .post(secureRoute, bundles.create);

router.route('/bundles/:id')
  .get(secureRoute, bundles.show)
  .delete(secureRoute, bundles.delete)
  //not implemented on the front yet
  .put(secureRoute, bundles.update);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update);

router.post('/bundles/:id/attendees', secureRoute, bundles.attendeeCreate);
router.delete('/bundles/:id/attendees/:attendeeId', secureRoute, bundles.attendeeDelete);

router.get('/events', skiddle.eventFinder);

router.get('/findPlaces', googlePlaceSearch.findGooglePlaces);
router.get('/findDetails', googlePlaceDetails.findPlaceDetails);
router.get('/travelTime', citymapper.getTravelTime);
router.get('/coverageTest', citymapper.coverageTest);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
