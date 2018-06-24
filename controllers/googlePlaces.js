const rp = require('request-promise');
function findGooglePlaces(req, res, next){

  rp({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.lat},${req.query.lng}&radius=${req.query.radius}&type=restaurant&key=AIzaSyDoFQd8oippLlkVlWztrh2rGfq4RGMjLqQ`,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  findGooglePlaces
};
