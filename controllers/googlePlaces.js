const rp = require('request-promise');
function findGooglePlaces(req, res, next){

  rp({
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&key=AIzaSyDoFQd8oippLlkVlWztrh2rGfq4RGMjLqQ',
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  findGooglePlaces
};
