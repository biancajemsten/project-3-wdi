const rp = require('request-promise');
const {skiddleApiKey} = require('./config/environment');
function eventFinder(req, res, next){
  console.log(req.query);
  rp({
    method: 'GET',
    url: `https://www.skiddle.com/api/v1/events/search/?api_key=${skiddleApiKey}&keyword=${req.query.keyword}limit=40`,
    json: true
  })
    .then(response => res.json(response))
    .catch(next);
}

module.exports = {
  eventFinder
};

// ${req.query.keyword}
