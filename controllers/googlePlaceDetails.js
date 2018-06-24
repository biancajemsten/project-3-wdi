const rp = require('request-promise');
function findPlaceDetails(req, res, next){
  console.log(req.query.place_id);

  rp({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${req.query.place_id}&fields=website,opening_hours,reviews&key=AIzaSyDoFQd8oippLlkVlWztrh2rGfq4RGMjLqQ`,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  findPlaceDetails
};
