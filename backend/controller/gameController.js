const Game = require("../models/game");

const getGames = async (ctx) => {
  try {
    const games = await Game.find();
    ctx.body = games;
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};

const addGames = async (ctx) => {
  if (!ctx.request.body.game_name) {
  ctx.body = { error: "Bad data" };
  return;
  }
  try {
    var game = new Game();
    game.game_name = ctx.request.body.game_name;
    const data = await game.save();
    ctx.body = data;
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};
const deleteGames = async (ctx) => {
  try {
    await Game.deleteOne({
      _id: ctx.params.id,
    });
    ctx.body = { status: "Game deleted!" };
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};

const getDetails = async (ctx) => {
  try {
    const game = await Game.find({
      _id: ctx.params.id,
    });
    ctx.body = game;
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};

module.exports.getGames = getGames;
module.exports.addGames = addGames;
module.exports.deleteGames = deleteGames;
module.exports.getDetails = getDetails;