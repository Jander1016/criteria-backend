import UsersSurveysModel from '../models/UsersSurveysModel';
import { Request, Response, NextFunction } from 'express';

const genericUuid = "00000000-0000-0000-0000-000000000000";

const UsersSurveysController = {

    // Función para OBTENER:
    getAllUsersSurveys: async (req: Request, res: Response) => {
        try {
            const users_surveys = await UsersSurveysModel.getAllUsersSurveys();
            res.status(200).json(users_surveys);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the users_survey' });
        }
    },

    // Función para OBTENER  por ID
    getUserSurvey: async (req: Request, res: Response) => {
        try {            
            let userid = genericUuid;
            let surveyid = genericUuid;
            if(req.query.userid) {              
                userid= String(req.query.userid);;
            }

            if(req.query.surveyid) {
                surveyid= String(req.query.surveyid);
            }
            
            const users_surveys = await UsersSurveysModel.getUserSurvey(userid, surveyid);
            if (!users_surveys) {
                res.status(404).json({ message: `The users_survey has not found` });
                return;
            }
            res.status(200).json(users_surveys); 
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the users_survey' });
        }
    },

    // Función para agregar un nueva   
    addUserSurvey: async (req: Request, res: Response) => {
        try {
            const {survey_id, user_id } = req.body;
            if (!survey_id || !user_id ) {
                res.status(400).json({ message: 'Please enter the users_survey information' });
                return;
            }

            await UsersSurveysModel.createUserSurvey(req.body);
            res.status(201).json({ message: 'users_survey created correctly!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error creating this users_survey' });
        }
    },

    // Función para ELIMINAR LOGICO una
    deleteLogicUserSurvey: async (req: Request, res: Response) => {
        try {
            if (!req.query.userid || !req.query.surveyid ) {
                res.status(400).json({ message: 'Please provide userid and surveyid information' });
                return;
            }

            let userid = String(req.query.userid);
            let surveyid = String(req.query.surveyid);

            await UsersSurveysModel.deleteLogicUserSurvey(userid, surveyid);
            res.status(200).json({ message: 'User users_survey deleted logic successfully!' });
            return;

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'An error occurred: ' + error });
        }
    }
};

export default UsersSurveysController;