const mongoose = require('mongoose');

const User = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: Object, required: true },
  avatar: { type: String },

  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Users', User);
