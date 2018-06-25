const Bundle = require('../models/bundle');

function showRoute(req, res, next){
  Bundle
    .findById(req.params.id)
    .then(bundle => res.json(bundle))
    .catch(next);
}

function createRoute(req, res, next){
  req.body.creator = req.currentUser;
  console.log(req);
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
