const User = require('../models/user');
const jwt = require('jsonwebtoken');
const {secret} = require('../config/environment');

function register(req, res, next){
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next);
}

function login(req, res, next){
  User.findOne({email: req.body.email})
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)){
        return res.status(401).json({message: 'Unauthorized'});
      }
      const token = jwt.sign({
        sub: user._id,
        currentUser: user
      }, secret, {expiresIn: '8h'});

      res.json({
        user,
        token,
        message: `Welcome back ${user.firstName} ${user.lastName}`});
    })
    .catch(next);
}

module.exports = {
  register,
  login
};
