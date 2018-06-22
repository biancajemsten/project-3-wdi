const router = require('express').Router();
const skiddle = require('../controllers/skiddle');
const auth = require('../controllers/auth');


router.get('/events', skiddle.eventFinder);

router.post('/register', auth.register);

module.exports = router;
