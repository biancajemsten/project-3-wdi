const User = require('../models/user');

function indexRoute(req, res, next) {
  User.find()
    .then(users => res.json(users))
    .catch(next);
}

function showRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
}

function updateRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}

function createGenreRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => {
      user.musicGenres.push(req.body);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

function deleteGenreRoute(req, res, next) {
  User.findById(req.params.id)
    .then(user => {
      const genre = user.musicGenres.id(req.params.genreId);
      genre.remove();
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  update: updateRoute,
  createGenre: createGenreRoute,
  deleteGenre: deleteGenreRoute
};
