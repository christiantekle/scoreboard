const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  name: {
    type: String,
  },
  players: [{
    type: mongoose.Types.ObjectId,
    ref: "Player"
  }],
  status: {
    type: String,
  }
});

module.exports = Game = mongoose.model("game", GameSchema);