const Bundle = require('../models/bundle');

function indexRoute(req, res, next){
  Bundle
    .find()
    .then(bundles => res.json(bundles))
    .catch(next);
}

function showRoute(req, res, next){
  Bundle
    .findById(req.params.id)
    .populate('creator')
    .populate('attendees')
    .then(bundle => res.json(bundle))
    .catch(next);
}

function createRoute(req, res, next){
  req.body.creator = req.currentUser;
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

function attendeeCreateRoute(req, res, next){
  Bundle.findById(req.params.id)
    .populate('creator')
    .populate('attendees')
    .then(bundle => {
      bundle.attendees.push(req.body);
      return bundle.save();
    })
    .then(boat => res.json(boat))
    .catch(next);
}
function attendeeDeleteRoute(req, res, next){
  Bundle.findById(req.params.id)
    .populate('creator')
    .populate('attendees')
    .then(bundle => {
      const attendee = bundle.attendees.id(req.params.attendeeId);
      attendee.remove();
      return bundle.save();
    })
    .then(bundle => res.json(bundle))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  attendeeCreate: attendeeCreateRoute,
  attendeeDelete: attendeeDeleteRoute
};
