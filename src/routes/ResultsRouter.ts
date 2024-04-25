import { Router } from "express";
import ResultsController from "../controllers/ResultsController";

const ResultsRouter = Router();

ResultsRouter
  .get('/api/', ResultsController.getAllResultsController)
  .get('/api/:id', ResultsController.getResultByIdController)
  .post('/api/', ResultsController.createResultController)
  .put('/api/:id', ResultsController.updateResultController)

  export default ResultsRouter;