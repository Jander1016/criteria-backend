import SurveysModel from '../models/SurveysModel';
import { Request, Response, NextFunction } from 'express';

const SurveysController = {

    // Función para OBTENER todas las encuestas:
    getAllSurveys: async (req: Request, res: Response) => {
        try {
            const surveys = await SurveysModel.getAllSurveys();
            res.status(200).json(surveys);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the surveys' });
        }
    },

    // Función para OBTENER encuesta por ID
    getSurvey: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const surveys = await SurveysModel.getSurvey(id);
            if (!surveys) {
                res.status(404).json({ message: `The survey with id ${id}, has not found` });
                return;
            }
            res.status(200).json(surveys); 
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the survey' });
        }
    },

    // Función para agregar un nueva encuesta   
    addSurvey: async (req: Request, res: Response) => {
        try {
            const {description, deadline, user_id, name } = req.body;
            if (!description || !deadline || !user_id || !name) {
                res.status(400).json({ message: 'Please enter the survey information' });
                return;
            }

             // Verificar si deadline es fecha válida
            if (isNaN(Date.parse(deadline))) {
                res.status(400).json({ message: 'Invalid deadline format. Please provide a valid date.' });
                return;
            }

            await SurveysModel.createSurvey(req.body);
            res.status(201).json({ message: 'survey created correctly!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error creating this survey' });
        }
    },

    // Función para ACTUALIZAR una encuesta
    updateSurvey: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const {description, deadline, user_id, name } = req.body;
            if (!description || !deadline || !user_id || !name) {
                res.status(400).json({ message: 'Please enter all survey information' });
                return;
            }

            await SurveysModel.updateSurvey(id, req.body);
            res.status(200).json({ message: 'survey up to date!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error while Updating the survey' });
        }
    },

    // Función para ELIMINAR encuesta
    deleteSurvey: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await SurveysModel.deleteSurvey(id);
            res.status(200).json({ message: 'survey successfully deleted' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error deleting the Survey: ' + error });
        }
    },

    // Función para ELIMINAR LOGICO una encuesta
    deleteLogicSurvey: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await SurveysModel.deleteLogicSurvey(id);
            res.status(200).json({ message: 'Survey deleted logic successfully!' });
            return;

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'An error occurred: ' + error });
        }
    }
};

export default SurveysController;