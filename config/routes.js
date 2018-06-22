const router = require('express').Router();
// const bundles = require('../controllers/bundles');
const user = require('../controllers/user');
const auth = require('../controllers/auth');
const skiddle = require('../controllers/skiddle');



router.get('/user/:id', user.show);


router.get('/events', skiddle.eventFinder);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
