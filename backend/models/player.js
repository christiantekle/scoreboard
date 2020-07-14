const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: {
      type: String
  },
  score: String,
});

module.exports = Player = mongoose.model("Player", playerSchema);