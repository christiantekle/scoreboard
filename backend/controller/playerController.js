const Game = require("../models/game");
const Player = require("../models/Player");

const addPlayer = async (ctx) => {
  const { body } = ctx.request;
  if (!body.name) {
    ctx.body = { error: "Bad data" };
    return;
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

const getPlayer = async (ctx) => {
  try {
    const player = await Player.find({name: 'John'}).exec();
    ctx.body = player;
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};

const addScore = async (ctx) => {
try {
  await Player.updateOne({name: 'John'}, { score: 22 })
 
} catch (err) {
  ctx.body = "Error: " +err;
}
}

module.exports.addPlayer = addPlayer;
module.exports.getPlayer = getPlayer;
module.exports.addScore = addScore;