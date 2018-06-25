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

const placeSchema = new mongoose.Schema({
  name: String,
  address: String,
  website: String,
  openingHours: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String
  },
  location: {
    lat: Number,
    lng: Number
  }
});

const bundleSchema = new mongoose.Schema({
  event: eventSchema,
  bar: placeSchema,
  restaurant: placeSchema,
  creator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Bundle', bundleSchema);
