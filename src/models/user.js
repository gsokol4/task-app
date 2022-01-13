const mongoose = require('mongoose')
//const validator = require('validator')

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate (value) {
      if (value === 'random') {
        throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate (value) {
      if (value === 'random') {
        throw new Error('invalid password, password must contain a lowercase letter, an uppercase letter, a number, a symbol and be at least 8 characters long')
      }
    }
  },
  age: {
    type: Number,
    trim: true,
    default: 0,
    validate (value) {
      if (value < 0) {
        throw new Error('age must be positve')
      }
    }
  }
})

module.exports = User
