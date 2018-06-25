const rp = require('request-promise');
// const {googleApiKey} = require('../config/environment');
function findPlaceDetails(req, res, next){

  rp({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.query.place_id}&fields=website,opening_hours,reviews,photo,formatted_address,place_id&key=AIzaSyDoFQd8oippLlkVlWztrh2rGfq4RGMjLqQ`,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  findPlaceDetails
};
