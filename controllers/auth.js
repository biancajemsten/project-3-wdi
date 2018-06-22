const User = require('../models/user');
// const jwt = require('jsonwebtoken');
// const {secret} = require('../config/environment');

function register(req, res, next){
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
}

module.exports = {
  register
};
