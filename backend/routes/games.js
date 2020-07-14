const Router = require("koa-router");
const router = new Router();
const gameController = require("../controller/gameController");
const playerController = require("../controller/playerController");

router.get("/api/games", gameController.getGames);
router.post("/api/games", gameController.addGames);
router.delete("/api/games/:id", gameController.deleteGames);
router.get("/api/games/:id", gameController.getDetails);

router.post("/api/games/:id", playerController.addPlayer);
module.exports = router;
