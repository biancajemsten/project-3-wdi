const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {port, dbURI} = require('./config/environment');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI);

const routes = require('./config/routes');


app.use(bodyParser.json());
app.use('/api', routes);


app.listen(port, () => console.log(`Cruisin' into port ${port}`));

module.exports = app;
