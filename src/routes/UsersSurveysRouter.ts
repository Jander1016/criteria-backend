import { Router } from "express";
import UsersSurveysController from "../controllers/UsersSurveysController";

const UsersSurveysRouter = Router();

UsersSurveysRouter.route("/").get(UsersSurveysController.getAllUsersSurveys);
UsersSurveysRouter.route("/filterbyid").get(UsersSurveysController.getUserSurvey);
UsersSurveysRouter.route("/").post(UsersSurveysController.addUserSurvey);
UsersSurveysRouter.route("/active").delete(UsersSurveysController.deleteLogicUserSurvey);

export default UsersSurveysRouter;
