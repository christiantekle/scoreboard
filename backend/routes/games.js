const Router = require("koa-router");
const router = new Router();
const gameController = require("../controller/gameController");
const playerController = require("../controller/playerController");

router.get("/api/games", gameController.getGames);
router.post("/api/games", gameController.createGame);
router.delete("/api/games/:id", gameController.deleteGame);
router.get("/api/games/:id", gameController.getGame);

router.put("/api/games/:id", playerController.addPlayer);
module.exports = router;
