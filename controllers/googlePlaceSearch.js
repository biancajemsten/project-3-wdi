const rp = require('request-promise');
// const {googleApiKey} = require('../config/environment');
function findGooglePlaces(req, res, next){

  rp({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.lat},${req.query.lng}&radius=${req.query.radius}&rankby=prominence&type=${req.query.type}&key=AIzaSyDjrf_WTxOnonYdVvRwobJ7vTU6FD0VpM0`,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  findGooglePlaces
};
