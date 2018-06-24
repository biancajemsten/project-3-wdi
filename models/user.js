const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstname: {type: String , required: true },
  lastname: {type: String , required: true},
  email: {type: String , required: true, unique: true},
  image: {type: String, required: false},
  password: {type: String , required: true} ,
  location: {type: String },
  musicgenres: {type: String }

});

userSchema.virtual('bundles', {
  localField: '_id',
  foreignField: 'creator',
  ref: 'Bundle'
});


userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmaion(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  });

//mongoose middleware
userSchema.pre('validate', function checkPasswordMatch(next){
  if(this.isModified('password')&& this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password){
  return bcrypt.compareSync(password, this.password);
};




module.exports = mongoose.model('User', userSchema);
