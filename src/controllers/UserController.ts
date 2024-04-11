import UsersModel from '../models/UsersModel';
import { Request, Response, NextFunction } from 'express';

const UsersController = {

    // Función para OBTENER TODOS los datos de usuarios:
    getAllUsers: async (req: Request, res: Response) => {
        try {
            const users = await UsersModel.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the user' });
        }
    },

    // Función para OBTENER usuario por ID
    getUser: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const users = await UsersModel.getUser(id);
            if (!users) {
                res.status(404).json({ message: `The user with id ${id}, has not found` });
                return;
            }
            res.status(200).json(users); 
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the user' });
        }
    },

    // Función para agregar un nuevo usuario    
    addUser: async (req: Request, res: Response) => {
        try {
            const { email, password, name, job_title, role, active, department_id } = req.body;
            if (!email || !password || !name || !job_title || (role === undefined)|| (active === undefined) || !department_id) {
                res.status(400).json({ message: 'Please enter the user information' });
                return;
            }
            //const password_encrypted:string= await encrypt(password);
            await UsersModel.createUser( req.body);
            res.status(201).json({ message: 'User created correctly!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error creating this user' });
        }
    },

    // Función para ACTUALIZAR un usuario
    updateUser: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const { email, password, name, job_title, role, active, department_id} = req.body;
            if (!email || !password || !name || !job_title || (role === undefined)|| (active === undefined) || !department_id) {
                res.status(400).json({ message: 'Please enter all user information' });
                return;
            }
            //const password_encrypted:string= await encrypt(password);
            await UsersModel.updateUser(id, req.body);
            res.status(200).json({ message: 'User up to date!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error while Updating the user' });
        }
    },

    // Función para ELIMINAR usuario
    deleteUser: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await UsersModel.deleteUser(id);
            res.status(200).json({ message: 'User successfully deleted' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error deleting the user' });
        }
    },
};

export default UsersController;