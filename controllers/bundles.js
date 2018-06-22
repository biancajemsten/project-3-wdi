const Bundle = require('../models/bundle');

function showRoute(req, res, next){
  Bundle
    .findById(req.params.id)
    .then(bundle => res.json(bundle))
    .catch(next);
}

function createRoute(req, res, next){
  Bundle
    .create(req.body)
    .then(bundle => res.status(201).json(bundle))
    .catch(next);
}

module.exports = {
  show: showRoute,
  create: createRoute
};
