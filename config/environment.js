const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const googleApiKey = process.env.GOOGLE_MAPS_API_KEY;
const skiddleApiKey = process.env.SKIDDLE_API_KEY;
const citymapperApiKey = process.env.CITYMAPPER_API_KEY;
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/bundle-api-${env}`;
const secret = '3_u@*BT_a@E#mXw';
module.exports = { port, dbURI, secret, googleApiKey, skiddleApiKey, citymapperApiKey };
