const rp = require('request-promise');

function findPlacePhotos(req, res, next){
  rp({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${req.query.photo_reference}&key=AIzaSyDoFQd8oippLlkVlWztrh2rGfq4RGMjLqQ`,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  findPlacePhotos
};
