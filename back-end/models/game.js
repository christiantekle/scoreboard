const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = require('mongodb').ObjectID;

const GameSchema = new Schema({
  game: {
    game_name: String,
    players: {
        id: ObjectId,  
        username: String,
        score: String      
      }
  },
  
});

module.exports = Game = mongoose.model("games", GameSchema);
