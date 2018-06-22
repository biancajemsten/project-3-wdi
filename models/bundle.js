const mongoose = require('mongoose');

const bundleSchema = new mongoose.Schema({
  event: {
    name: String,
    date: String,
    location: {
      lat: Number,
      lng: Number
    }
  },
  pub: {
    name: String,
    location: {
      lat: Number,
      lng: Number
    }
  },
  restaurant: {
    name: String,
    location: {
      lat: Number,
      lng: Number
    }
  },
  creator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Bundle', bundleSchema);
