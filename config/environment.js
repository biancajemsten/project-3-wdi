const port = 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = `mongodb://localhost/bundle-api-${env}`;
const secret = '3_u@*BT_a@E#mXw';

module.exports = { port, dbURI, secret};
