const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = require('mongodb').ObjectID;

const GameSchema = new Schema({
  game_name: {
     type: String
     },
  
});

module.exports = Game = mongoose.model("games", GameSchema);
