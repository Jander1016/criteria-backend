import DepartmentsModel from '../models/DepartmentsModel';
import { Request, Response, NextFunction } from 'express';

const DepartmentsController = {

    // Función para OBTENER TODOS los departamentos:
    getAllDepartments: async (req: Request, res: Response) => {
        try {
            const departments = await DepartmentsModel.getAllDepartments();
            res.status(200).json(departments);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the departments' });
        }
    },

    // Función para OBTENER departamentos por ID
    getDepartment: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const departments = await DepartmentsModel.getDepartment(id);
            if (!departments) {
                res.status(404).json({ message: `The department with id ${id}, has not found` });
                return;
            }
            res.status(200).json(departments); 
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the departments' });
        }
    },

    // Función para agregar un nuevo departamento   
    addDepartment: async (req: Request, res: Response) => {
        try {
            const { name } = req.body;
            if (!name) {
                res.status(400).json({ message: 'Please enter the department information' });
                return;
            }

            await DepartmentsModel.createDepartment(req.body);
            res.status(201).json({ message: 'department created correctly!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error creating this department' });
        }
    },

    // Función para ACTUALIZAR un departamento
    updateDepartment: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const { name } = req.body;
            if (!name) {
                res.status(400).json({ message: 'Please enter all department information' });
                return;
            }

            await DepartmentsModel.updateDepartment(id, req.body);
            res.status(200).json({ message: 'department up to date!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error while Updating the department' });
        }
    },

    // Función para ELIMINAR departamento
    deleteDepartment: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await DepartmentsModel.deleteDepartment(id);
            res.status(200).json({ message: 'department successfully deleted' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error deleting the department: ' + error });
        }
    },

    // Función para ELIMINAR LOGICO un departamento
    deleteLogicDepartment: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await DepartmentsModel.deleteLogicDepartment(id);
            res.status(200).json({ message: 'Survey deleted logic successfully!' });
            return;

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'An error occurred: ' + error });
        }
    }
};

export default DepartmentsController;