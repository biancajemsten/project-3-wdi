const Bundle = require('../models/bundle');

function showRoute(req, res, next){
  Bundle
    .findById(req.params.id)
    .then(bundle => res.json(bundle))
    .catch(next);
}

function createRoute(req, res, next){
  req.body.creator = '5b2f7492e074e9c3dc9d2fc7';
  Bundle
    .create(req.body)
    .then(bundle => res.status(201).json(bundle))
    .catch(next);
}

function updateRoute(req, res, next){
  Bundle
    .findById(req.params.id)
    .then(bundle => bundle.set(req.body))
    .then(bundle => bundle.save())
    .then(bundle => res.json(bundle))
    .catch(next);
}

function deleteRoute(req, res, next){
  Bundle
    .findById(req.params.id)
    .then(bundle => bundle.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
