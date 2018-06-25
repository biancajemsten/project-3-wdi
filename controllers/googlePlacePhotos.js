const rp = require('request-promise');

function findPlacePhotos(req, res, next){
  rp({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${req.query.photo_reference}&key=AIzaSyBIyuh9GpwLh5Gxc1J5MTKwAnp-8JjVKDI`,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  findPlacePhotos
};
