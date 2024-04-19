import ResultsModel from "../models/ResultsModel";
import { Request, Response } from "express";

const ResultsController = {
  // Función para OBTENER TODOS los datos de respuestas:
  getAllResultsController: async (req: Request, res: Response) => {
    try {
      const Results = await ResultsModel.getAllResults();
      res.status(200).json(Results);
    } catch (error) {
      console.log(error);
    }
  },
  getResultByIdController: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await ResultsModel.getResultById(id);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'There was an error reading the Results' });
    }
  },
  // Función para CREAR respuestas
  createResultController: async (req: Request, res: Response) => {
    try {
      const result = req.body;
      const newResult = await ResultsModel.createResults(result);
      res.status(200).json(newResult);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "There was an error creating the Results" });
    }
  },
  // Función para actualizar respuestas
  updateResultController: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = req.body;
      const updatedResult = await ResultsModel.updateResults(id, result);
      res.status(200).json(updatedResult);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "There was an error updating the Results" });
    }
  },
  // Función para ELIMINAR respuestas
}

export default ResultsController;