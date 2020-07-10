const Router = require("koa-router");
const router = new Router();
const gameController = require("../controller/gameController");

router.get("/api/games", gameController.getGames);

module.exports = router;
