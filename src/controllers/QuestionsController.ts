import QuestionsModel from "../models/QuestionsModel";
import { Request, Response } from "express";

const QuestionsController = {
  // Función para OBTENER TODOS los preguntas:
  getAllQuestions: async (req: Request, res: Response) => {
    try {
      const questions = await QuestionsModel.getAllQuestions();
      res.status(200).json(questions);
    } catch (error) {
      console.log(error);
    }
  },
  // Función para OBTENER preguntas por ID
  getQuestionById: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const questions = await QuestionsModel.getQuestionById(id);
      if (!questions) {
        res.status(500).json({ message: "There was an error reading the questions" });
      } else {
        res.status(200).json(questions);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "There was an error reading the questions" });
    }
  },
  // Función para CREAR preguntas
  createQuestion: async (req: Request, res: Response) => {
    try {
      const question = req.body;
      const newQuestion = await QuestionsModel.createQuestions(question);
      res.status(200).json(newQuestion);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "There was an error creating the questions" });
    }
  },
  // Función para ACTUALIZAR preguntas
  updateQuestion: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const question = req.body;
      const updatedQuestion = await QuestionsModel.updateQuestions(id, question);
      res.status(200).json(updatedQuestion);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "There was an error updating the questions" });
    }
  }
}

export default QuestionsController;