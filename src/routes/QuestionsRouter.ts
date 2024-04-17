import { Router } from "express";
import QuestionsController from "../controllers/QuestionsController";

const questionRouter = Router();

questionRouter
.get('/', QuestionsController.getAllQuestions)
.get('/:id', QuestionsController.getQuestionById)
.post('/', QuestionsController.createQuestion)
.put('/:id', QuestionsController.updateQuestion)

export default questionRouter;