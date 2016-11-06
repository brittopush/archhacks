var mongoose = require('mongoose');

// Create the MovieSchema.
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  username:{
    type: String,
    required: true
  },
  passwd: {
    type: String,
    required: true
  },
  insuranceID: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  insuranceCompany:{
    type: String,
    required: false
  },
  bloodGroup:{
    type: String,
    required: true
  },
  medHistory:{
    type: String,
    required: false
  },
  contactNo:{
    type: Number,
    required: false
  }
});

// Export the model.
module.exports = UserSchema;
