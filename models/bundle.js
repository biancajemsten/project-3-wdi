const mongoose = require('mongoose');

const bundleSchema = new mongoose.Schema({
  event: {
    name: String,
    date: String,
    address: String, 
    venue: String,
    ticketPrice: String,
    description: String,
    startTime: String,
    eventType: String,
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


const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  venue: String,
  ticketPrice: String,
  description: String,
  startTime: String,
  eventType: String,
  location: {
    lat: Number,
    lng: Number
  }
});

module.exports = mongoose.model('Bundle', bundleSchema);
