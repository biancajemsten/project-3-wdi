const router = require('express').Router();
// const bundles = require('../controllers/bundles');
const user = require('../controllers/users');
const auth = require('../controllers/auth');
const skiddle = require('../controllers/skiddle');
const secureRoute = require('../lib/secureRoute');
const googlePlaces = require('../controllers/googlePlaces');



router.get('/user/:id',secureRoute, user.show);
router.put('/user/:id/edit', secureRoute, user.update);

router.get('/events', skiddle.eventFinder);

router.get('/findPlaces', googlePlaces.findGooglePlaces); 

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
