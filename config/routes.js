const router = require('express').Router();
// const bundles = require('../controllers/bundles');
const user = require('../controllers/users');
const auth = require('../controllers/auth');
const skiddle = require('../controllers/skiddle');



router.get('/user/:id', user.show);
router.put('/user/:id/edit', user.update);

router.get('/events', skiddle.eventFinder);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
