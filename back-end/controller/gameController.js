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

module.exports.addGames = addGames;
module.exports.getGames = getGames;
