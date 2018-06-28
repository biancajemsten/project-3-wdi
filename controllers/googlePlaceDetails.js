const rp = require('request-promise');
// const {googleApiKey} = require('../config/environment');
function findPlaceDetails(req, res, next){

  rp({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.query.place_id}&fields=website,opening_hours,formatted_address,place_id&key=AIzaSyBIyuh9GpwLh5Gxc1J5MTKwAnp-8JjVKDI`,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  findPlaceDetails
};
