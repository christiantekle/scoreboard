const Koa = require("koa");
const bodyParser = require("koa-body");
const cors = require("kcors");

const app = new Koa();
const mongoose = require("mongoose");

const games = require("./routes/routes");

// Allow secure cookies with X-Forwarded-Proto: https app.proxy = true;
app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser());
app.use(games.routes());

mongoose.connect("mongodb://localhost/scoreboard", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(8000, () => {
  console.log("Server running at port 8000");
});
