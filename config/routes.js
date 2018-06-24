const router = require('express').Router();
const bundles = require('../controllers/bundles');
const user = require('../controllers/users');
const auth = require('../controllers/auth');
const skiddle = require('../controllers/skiddle');
// const secureRoute = require('../lib/secureRoute');
const googlePlaceSearch = require('../controllers/googlePlaceSearch');
const googlePlaceDetails = require('../controllers/googlePlaceDetails');

router.post('/bundles', bundles.create);

router.route('/bundles/:id')
  .get(bundles.show)
  .put( bundles.update)
  .delete( bundles.delete);

router.get('/user/:id', user.show);
router.put('/user/:id/edit', user.update);

router.get('/events', skiddle.eventFinder);

router.get('/findPlaces', googlePlaceSearch.findGooglePlaces);
router.get('/findDetails', googlePlaceDetails.findPlaceDetails);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
