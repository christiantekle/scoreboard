const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  game_name: {
    type: String,
  },
  players: [{
    type: Schema.Types.ObjectId,
    ref: "Player"
  }],
});

module.exports = Game = mongoose.model("game", GameSchema);