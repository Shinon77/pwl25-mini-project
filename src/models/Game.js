const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Judul game wajib diisi'],
  },
  platform: {
    type: String,
    required: [true, 'Platform wajib diisi (cth: PC, PS5, Switch)'],
  },
  genre: {
    type: String,
    default: 'Action',
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 5,
  },
  playtime_hours: {
    type: Number,
    default: 0,
  },
  last_played: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Game', GameSchema);