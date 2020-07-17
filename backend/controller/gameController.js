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

const startGame = async (ctx) => {
  try {
    const game = await Game.findById(ctx.params.id);
    game.status = "Game started";
    await game.save();
    ctx.body = "Game started";
  } catch (err) {
    ctx.body = "Error: " + err;
  }
};

const finishGame = async (ctx) => {
  try {
    const game = await Game.findById(ctx.params.id);
    game.status = "Game Over";
    await game.save();
    ctx.body = "Game Over";
  } catch (err) {
    ctx.body = "Error: " +err;
  }
}
module.exports.getGames = getGames;
module.exports.createGame = createGame;
module.exports.deleteGame = deleteGame;
module.exports.getGame = getGame;
module.exports.startGame = startGame;
module.exports.finishGame = finishGame;
