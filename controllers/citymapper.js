const rp = require('request-promise');
const { citymapperApiKey } = require('../config/environment');

function getTravelTime(req, res, next){
  rp({
    method: 'GET',
    url: `https://developer.citymapper.com/api/1/traveltime/?startcoord=${req.query.lat}%2C${req.query.lng}&endcoord=${req.query.destinationLat}%2C${req.query.destinationLng}&key=${citymapperApiKey}`,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

function coverageTest(req, res, next){
  rp({
    method: 'GET',
    url: `https://developer.citymapper.com/api/1/singlepointcoverage/?coord=${req.query.lat}%2C${req.query.lng}&key=b19907af936c9cca2fc8f2c7e872d97d`,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  getTravelTime,
  coverageTest
};
