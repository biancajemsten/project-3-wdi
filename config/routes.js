const router = require('express').Router();
const skiddle = require('../controllers/skiddle');


router.get('/events', skiddle.eventFinder);

module.exports = router;
