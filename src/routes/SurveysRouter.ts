import { Router } from "express";
import SurveysController from "../controllers/SurveysController";

const SurveysRouter = Router();

SurveysRouter.route("/").get(SurveysController.getAllSurveys);
SurveysRouter.route("/:id").get(SurveysController.getSurvey);
SurveysRouter.route("/").post(SurveysController.addSurvey);
SurveysRouter.route("/:id").put(SurveysController.updateSurvey);
SurveysRouter.route("/:id").delete(SurveysController.deleteSurvey);
SurveysRouter.route("/active/:id").delete(SurveysController.deleteLogicSurvey);

export default SurveysRouter;
