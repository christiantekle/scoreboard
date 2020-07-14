const Game = require("../models/game");
const Player = require("../models/Player");

const addPlayer = async (ctx) => {
  const { body } = ctx.request;
  if (!body.name) {
    ctx.body = { error: "Bad data" };
  }

  // await Game.update(
  //   {
  //     name: ctx.params.id
  //   }, 
  //   {
  //     $push: {
  //       players: player
  //     } 
  //   }
  // );

  var player = new Player();
  player.name = body.name;
  player.score = 0;
  const playerObj = await player.save();

  const game = await Game.findById(ctx.params.id).exec();

  game.players.push(playerObj._id);
  await game.save();

  ctx.body = "saved";
};



module.exports.addPlayer = addPlayer;
