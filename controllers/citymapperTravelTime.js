const rp = require('request-promise');

function getTravelTime(req, res, next){
  rp({
    method: 'GET',
    url: `https://developer.citymapper.com/api/1/traveltime/?startcoord=${req.query.lat}%2C${req.query.lng}&endcoord=${req.query.destinationLat}%2C${req.query.destinationLng}&key=d93a4df47693b07dd2a19e68b3b1b4cd`,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  getTravelTime
};
