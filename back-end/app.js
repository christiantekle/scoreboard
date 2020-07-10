const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-body");
const mongoose = require('mongoose');

const games = require('./routes/games')

app.use(bodyParser());
app.use(games.routes());

mongoose.connect("mongodb://localhost/scoreboard", { useNewUrlParser: true, useUnifiedTopology: true});

app.listen(8000, () => {
  console.log("Server running at port 8000");
});
