const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  venue: String,
  address: String,
  ticketPrice: String,
  description: String,
  startTime: String,
  eventType: String,
  location: {
    lat: Number,
    lng: Number
  }
});

// const placeSchema = new mongoose.Schema({
//
// })

const bundleSchema = new mongoose.Schema({
  event: eventSchema,
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
