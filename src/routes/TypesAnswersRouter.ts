import { Router } from "express";
import TypesAnswersController from "../controllers/TypesAnswersController";

const TypesAnswersRouter = Router();

TypesAnswersRouter.route("/").get(TypesAnswersController.getAllTypesAnswers);
TypesAnswersRouter.route("/:id").get(TypesAnswersController.getTypeAnswer);
TypesAnswersRouter.route("/").post(TypesAnswersController.addTypeAnswer);
TypesAnswersRouter.route("/:id").put(TypesAnswersController.updateTypeAnswer);
TypesAnswersRouter.route("/:id").delete(TypesAnswersController.deleteTypeAnswer);

export default TypesAnswersRouter;
