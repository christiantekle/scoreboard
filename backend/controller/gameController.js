const Game = require("../models/game");

const getGames = async (ctx) => {
  try {
    const games = await Game.find();
    ctx.body = games;
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};

const createGame = async (ctx) => {
  if (!ctx.request.body.name) {
    ctx.body = { error: "Bad data" };
    return;
  }

  try {
    var game = new Game();
    game.name = ctx.request.body.name;
    game.status = ctx.request.body.status;
    const data = await game.save();
    ctx.body = data;
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};

const deleteGame = async (ctx) => {
  try {
    await Game.deleteOne({
      _id: ctx.params.id,
    });

    ctx.body = { status: "Game deleted!" };
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};

const getGame = async (ctx) => {
  try {
    const game = await Game.findById(ctx.params.id).populate("players").exec();
    ctx.body = game;
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};

const changeGameStatus = async (ctx) => {
  try {
    const game = await Game.findById(ctx.params.id);
    let status = "Game Started";
    if (ctx.request.body.status === "Finish") {
      status = "Game Over";
      ctx.body = status;
      return;
    }
    game.status = status;
    ctx.body = game.status;
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};

module.exports.getGames = getGames;
module.exports.createGame = createGame;
module.exports.deleteGame = deleteGame;
module.exports.getGame = getGame;
module.exports.changeGameStatus = changeGameStatus;
