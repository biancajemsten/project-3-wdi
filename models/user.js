const mongoose = require('mongoose');
// const bcrpyt = require('bcrpyt');

const userSchema = new mongoose.Schema({
  firstname: {type: String , required: true },
  lastname: {type: String , required: true},
  email: {type: String , required: true, unique: true},
  password: {type: String , required: true} ,
  location: {type: String , required: true},
  musicgenres: {type: String , required: false}

});

userSchema.virtual('bundles', {
  localField: '_id',
  foreignField: 'creator',
  ref: 'Bundle'
});

// user virtual for password passwordConfirmation

// user virtual for

module.exports = mongoose.model('User', userSchema);
