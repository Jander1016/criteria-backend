import { Router } from "express";
import AnswersController from "../controllers/AnswersController";

const answersRouter = Router();

answersRouter
  .get('/api/', AnswersController.getAllAnswersController)
  .get('/api/:id', AnswersController.getAnswerByIdController)
  .post('/api/', AnswersController.createAnswerController)
  .put('/api/:id', AnswersController.updateAnswerController)

  export default answersRouter;