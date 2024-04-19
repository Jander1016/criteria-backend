import { Router } from "express";
import UsersController from "../controllers/UserController";
import { isEvaluator } from "../middelwares/sesionMiddelwares";

const UsersRouter = Router();

UsersRouter.route("/").get(UsersController.getAllUsers);
UsersRouter.route("/:id").get(UsersController.getUser);
UsersRouter.route("/").post(UsersController.addUser);
UsersRouter.route("/:id").put(UsersController.updateUser);
UsersRouter.route("/:id").delete(isEvaluator, UsersController.deleteUser);
UsersRouter.route("/login").post(UsersController.login);

export default UsersRouter;
