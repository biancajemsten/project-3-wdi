const router = require('express').Router();
const bundles = require('../controllers/bundles');
const user = require('../controllers/users');
const auth = require('../controllers/auth');
const skiddle = require('../controllers/skiddle');
const secureRoute = require('../lib/secureRoute');
const googlePlaces = require('../controllers/googlePlaces');

router.post('/bundles', secureRoute, bundles.create);

router.route('/bundles/:id')
  .get(bundles.show)
  .put(secureRoute, bundles.update)
  .delete(secureRoute, bundles.delete);

router.get('/users/:id', user.show);
router.put('/users/:id/edit', user.update);

router.get('/events', skiddle.eventFinder);

router.get('/findPlaces', googlePlaces.findGooglePlaces);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
