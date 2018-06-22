const router = require('express').Router();
const bundles = require('../controllers/bundles');
const user = require('../controllers/user');
const auth = require('../controllers/auth');



router.get('/profile', secureRoute, auth.profile);




















module.exports = router;
