const rp = require('request-promise');
// const {googleApiKey} = require('../config/environment');
function findGooglePlaces(req, res, next){

  rp({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.lat},${req.query.lng}&radius=${req.query.radius}&rankby=prominence&type=${req.query.type}&key=AIzaSyBIyuh9GpwLh5Gxc1J5MTKwAnp-8JjVKDI `,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  findGooglePlaces
};
