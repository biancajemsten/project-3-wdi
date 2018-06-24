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
  bar: {
    name: String,
    location: {
      lat: Number,
      lng: Number
    },
    place_id: String
  },
  restaurant: {
    name: String,
    location: {
      lat: Number,
      lng: Number
    },
    place_id: String
  },
  creator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Bundle', bundleSchema);
