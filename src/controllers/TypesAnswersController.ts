import TypesAnswersModel from '../models/TypesAnswersModel';
import { Request, Response, NextFunction } from 'express';

const TypesAnswersController = {

    // Función para OBTENER TODOS los types_answers:
    getAllTypesAnswers: async (req: Request, res: Response) => {
        try {
            const types_answers = await TypesAnswersModel.getAllTypesAnswers();
            res.status(200).json(types_answers);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the types_answers' });
        }
    },

    // Función para OBTENER tipo de encuesta por ID
    getTypeAnswer: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const types_answers = await TypesAnswersModel.getTypeAnswer(id);
            if (!types_answers) {
                res.status(404).json({ message: `The area with id ${id}, has not found` });
                return;
            }
            res.status(200).json(types_answers); 
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the area' });
        }
    },

    // Función para agregar un nuevo tipo de encuesta   
    addTypeAnswer: async (req: Request, res: Response) => {
        try {
            const { type, description } = req.body;
            if (!type || !description) {
                res.status(400).json({ message: 'Please enter the area information' });
                return;
            }

            await TypesAnswersModel.createTypeAnswer(req.body);
            res.status(201).json({ message: 'Area created correctly!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error creating this area' });
        }
    },

    // Función para ACTUALIZAR un tipo de encuesta
    updateTypeAnswer: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const { type, description } = req.body;
            if (!type || !description) {
                res.status(400).json({ message: 'Please enter all area information' });
                return;
            }

            await TypesAnswersModel.updateTypeAnswer(id, req.body);
            res.status(200).json({ message: 'area up to date!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error while Updating the area' });
        }
    },

    // Función para ELIMINAR tipo de encuesta
    deleteTypeAnswer: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await TypesAnswersModel.deleteTypeAnswer(id);
            res.status(200).json({ message: 'area successfully deleted' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error deleting the TypesAnswer: ' + error });
        }
    },

    // Función para ELIMINAR LOGICO un tipo de encuesta
    deleteLogicTypeAnswer: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await TypesAnswersModel.deleteLogicTypeAnswer(id);
            res.status(200).json({ message: 'Survey deleted logic successfully!' });
            return;

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'An error occurred: ' + error });
        }
    }
};

export default TypesAnswersController;