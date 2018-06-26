const router = require('express').Router();
const bundles = require('../controllers/bundles');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const skiddle = require('../controllers/skiddle');
const secureRoute = require('../lib/secureRoute');
const googlePlaceSearch = require('../controllers/googlePlaceSearch');
const googlePlaceDetails = require('../controllers/googlePlaceDetails');
const googlePlacePhotos = require('../controllers/googlePlacePhotos');

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
  .put(secureRoute, users.update);

router.get('/events', skiddle.eventFinder);

router.get('/findPlaces', googlePlaceSearch.findGooglePlaces);
router.get('/findDetails', googlePlaceDetails.findPlaceDetails);
router.get('/findPhotos', googlePlacePhotos.findPlacePhotos);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
