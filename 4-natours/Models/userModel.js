const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail,'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [8, 'Password must be at least 8 characters long'],
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        // `this` only points to the current document on NEW document creation
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  },
  photo: {
    type: String,
    default: 'default.jpg', // Default photo filename
  },
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
