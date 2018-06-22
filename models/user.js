const mongoose = require('mongoose');
// const bcrpyt = require('bcrpyt');

const userSchema = new mongoose.Schema({
  firstname: {type: String , required: true },
  lastname: {type: String , required: true},
  email: {type: String , required: true},
  password: {type: String , required: true} ,
  location: {type: String , required: true},
  musicgenres: {type: String , required: true}

});

module.exports = mongoose.model('User', userSchema);
