import { Router } from "express";
import AreasController from "../controllers/AreasController";

const AreasRouter = Router();

AreasRouter.route("/").get(AreasController.getAllAreas);
AreasRouter.route("/:id").get(AreasController.getArea);
AreasRouter.route("/").post(AreasController.addArea);
AreasRouter.route("/:id").put(AreasController.updateArea);
AreasRouter.route("/:id").delete(AreasController.deleteArea);

export default AreasRouter;
