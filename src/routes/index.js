const { Router } = require("express");
const userRouter = require("./users.routes");
const dishesRouter = require("./dishes.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router();

routes.use("/users", userRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/dishes", dishesRouter);

module.exports = routes;
