const { Router } = require("express");
const userRouter = require("./users.routes");
const dishesRouter = require("./dishes.routes");

const routes = Router();

routes.use("/users", userRouter);
routes.use("/dishes", dishesRouter);

module.exports = routes;
