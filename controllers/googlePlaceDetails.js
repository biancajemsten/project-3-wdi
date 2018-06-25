const rp = require('request-promise');
const {googleApiKey} = require('./config/environment'); 
function findPlaceDetails(req, res, next){
  console.log(req.query.place_id);

  rp({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.query.place_id}&fields=website,opening_hours,reviews,place_id&key=${googleApiKey}`,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  findPlaceDetails
};
