const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const GenerationEngine = require("./generation/engine");
const dragonRouter = require("./api/dragon");
const generationRouter = require("./api/generation");
const accountRouter = require("./api/account");

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

const ENV = process.env.NODE_ENV;
const port = process.env.PORT || 3001;

app.use(cors({ origin: port, credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/account", accountRouter);
app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);

if (ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
}

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: "error",
    message: err.message
  });
});

engine.start();

module.exports = app;
