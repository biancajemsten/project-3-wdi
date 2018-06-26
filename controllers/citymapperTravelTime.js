const rp = require('request-promise');

function getTravelTime(req, res, next){
  rp({
    method: 'GET',
    url: `https://developer.citymapper.com/api/1/traveltime/?startcoord=${req.query.location.lat}%2C${req.query.location.lng}&endcoord=${req.query.event.location.lat}%2C${req.query.event.location.lng}&key=d93a4df47693b07dd2a19e68b3b1b4cd`,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  getTravelTime
};
