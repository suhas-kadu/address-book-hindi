const mongoose = require('mongoose');
const validator = require('validator');

const personSchema = new mongoose.Schema({
  name: {
    first_name: {
      type: String,
      required: true,
      minlength: 3,
    },
    last_name: {
      type: String,
      required: true,
      minlength: 3,
    },
  },

  email: {
    type: String,
    required: true,
    unique: [true, 'Email id is already present'],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email');
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: [true, 'This phone number is already present.'],
  },
  permenant_address: {
    full_address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
  },

  residental_address: {
    full_address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
  },
});

// creating a new collection
const Person = new mongoose.model('Person', personSchema);

//Exporting the model
module.exports = Person;
