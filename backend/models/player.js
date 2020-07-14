const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  player_name: {
      type: String
  },
  score: String,
 
});

module.exports = Player = mongoose.model("players", playerSchema);