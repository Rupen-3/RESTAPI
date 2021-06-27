const mongoose = require("mongoose");
const validator = require('validator');

const playerSchema = new mongoose.Schema({
  player_name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  contact: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: [true, "Email id already exist"],
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  game: {
    type: String,
    require: true,
  },
  registation_time: {
    type: Date,
    default: Date.now,
  }
});

const Player = new mongoose.model('player', playerSchema);

module.exports = Player