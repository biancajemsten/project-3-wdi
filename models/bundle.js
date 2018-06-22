const mongoose = require('mongoose');

const bundleSchema = new mongoose.Schema({
  Event: {
    name: String,
    date: String,
    location: {
      lat: Number,
      lng: Number
    }
  },
  Pub: {
    name: String,
    location: {
      lat: Number,
      lng: Number
    }
  },
  Restaurant: {
    name: String,
    location: {
      lat: Number,
      lng: Number
    }
  },
  Creator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Bundle', bundleSchema);
