const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const moment = require('moment');

const userSchema = new mongoose.Schema({
  firstName: { type: String , required: true },
  lastName: { type: String , required: true },
  email: { type: String , required: true, unique: true },
  image: { type: String, required: false },
  password: { type: String , required: true } ,
  location: { type: String },
  musicGenres: [{ type: String }]
});

userSchema.virtual('bundles', {
  localField: '_id',
  foreignField: 'creator',
  ref: 'Bundle'
});

userSchema.virtual('upcomingBundles')
  .get(function() {
    if(!this.bundles) return null;

    return this.bundles.filter(bundle => {
      return moment(bundle.event.date).isAfter(moment());
    });
  });

userSchema.set('toJSON', {
  virtuals: true
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
