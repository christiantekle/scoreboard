const Router = require("koa-router");
const router = new Router();
const gameController = require("../controller/gameController");

router.get("/api/games", gameController.getGames);
router.post("/api/games", gameController.addGames);
router.delete("/api/games/:id", gameController.deleteGames)

module.exports = router;
