var mongoose = require('mongoose');

// Create the MovieSchema.
var DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  mobile: {
    type: Number,
    required: false
  },
  url: {
    type: String,
    required: false
  }
});

// Export the model.
module.exports = DoctorSchema;
