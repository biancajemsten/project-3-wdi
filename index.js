const express = require('express');
const app = express();

const {port, dbURI} = require('./config/environment');






app.listen(port, () => console.log(`Cruisin' into port ${port}`));
