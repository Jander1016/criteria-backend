import AnswersModel from "../models/AnswersModel";
import { Request, Response } from "express";

const AnswersController = {
  // Función para OBTENER TODOS los datos de respuestas:
  getAllAnswersController: async (req: Request, res: Response) => {
    try {
      const answers = await AnswersModel.getAllAnswers();
      res.status(200).json(answers);
    } catch (error) {
      console.log(error);
    }
  },
  getAnswerByIdController: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const answer = await AnswersModel.getAnswerById(id);
      res.status(200).json(answer);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'There was an error reading the answers' });
    }
  },
  // Función para CREAR respuestas
  createAnswerController: async (req: Request, res: Response) => {
    try {
      const answer = req.body;
      const newAnswer = await AnswersModel.createAnswers(answer);
      res.status(200).json(newAnswer);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "There was an error creating the answers" });
    }
  },
  // Función para actualizar respuestas
  updateAnswerController: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const answer = req.body;
      const updatedAnswer = await AnswersModel.updateAnswers(id, answer);
      res.status(200).json(updatedAnswer);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "There was an error updating the answers" });
    }
  },
  // Función para ELIMINAR respuestas
}

export default AnswersController;