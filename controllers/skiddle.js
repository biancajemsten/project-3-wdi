const rp = require('request-promise');
function eventFinder(req, res, next){
  console.log(req.query);
  rp({
    method: 'GET',
    url: 'https://www.skiddle.com/api/v1/events/search/?api_key=0db3697f15a253fe58873b98a204ca3e&keyword=t&limit=40',
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  eventFinder
};

// ${req.query.keyword}
