const Game = require("../models/game");

const addPlayer = async (ctx) => {
  if (!ctx.request.body.player_name) {
    ctx.body = { error: "Bad data" };
  }
  // Game.create(ctx.body)
  // .then( (data) => {
  //   return Game.findByIdAndUpdate({_id: ctx.params.id}, {$push: {}}, {new: true})
  // })
  // .then((games) => {
  //   ctx.body = games;
  // })
  // .catch((err) => {
  //   ctx.body = "Error " +err;
  // })
};

module.exports.addPlayer = addPlayer;
