const mongoose = require('mongoose');

const bundleSchema = new mongoose.Schema({
  Event: {
    name: String,
    date: String,
    location: {
      lat: { type: Number, required: true},
      lng: { type: Number, required: true}
    }
  },
  Pub: {
    name: String,
    location: {
      lat: { type: Number, required: true},
      lng: { type: Number, required: true}
    }
  },
  Restaurant: {
    name: String,
    location: {
      lat: { type: Number, required: true},
      lng: { type: Number, required: true}
    }
  },
  Creator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Bundle', bundleSchema);
