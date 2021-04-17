const mongoose = require('mongoose');

const PasswordRecovery = new mongoose.Schema({
  email: { type: String, required: true },
  token: { type: String, required: true, unique: true },

  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('password', PasswordRecovery);
