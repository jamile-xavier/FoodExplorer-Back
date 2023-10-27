const { Router } = require("express");
const DishesController = require("../controllers/DishesController");
const DishesImageController = require("../controllers/DishesImageController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const dishesRoutes = Router();

const upload = multer(uploadConfig.MULTER);

const dishesController = new DishesController();
const dishesImageController = new DishesImageController();

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.get("/", dishesController.index);
dishesRoutes.post(
  "/",
  verifyUserAuthorization("admin"),
  upload.single("image"),
  dishesController.create
);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.delete(
  "/:id",
  verifyUserAuthorization("admin"),
  dishesController.delete
);
dishesRoutes.put(
  "/:id",
  verifyUserAuthorization("admin"),
  upload.single("image"),
  dishesController.update
);
/*dishesRoutes.patch(
  "/image/:id",
  verifyUserAuthorization("admin"),
  upload.single("image"),
  dishesImageController.update
);*/

module.exports = dishesRoutes;
