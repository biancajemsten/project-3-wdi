const rp = require('request-promise');
// const {googleApiKey} = require('../config/environment');
function findPlaceDetails(req, res, next){

  rp({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.query.place_id}&fields=website,opening_hours,formatted_address,place_id&key=AIzaSyDjrf_WTxOnonYdVvRwobJ7vTU6FD0VpM0`,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  findPlaceDetails
};
