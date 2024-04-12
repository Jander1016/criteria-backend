import AreasModel from '../models/AreasModel';
import { Request, Response, NextFunction } from 'express';

const AreasController = {

    // Función para OBTENER TODOS los areas:
    getAllAreas: async (req: Request, res: Response) => {
        try {
            const areas = await AreasModel.getAllAreas();
            res.status(200).json(areas);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the areas' });
        }
    },

    // Función para OBTENER area por ID
    getArea: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const areas = await AreasModel.getArea(id);
            if (!areas) {
                res.status(404).json({ message: `The area with id ${id}, has not found` });
                return;
            }
            res.status(200).json(areas); 
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the area' });
        }
    },

    // Función para agregar un nuevo area   
    addArea: async (req: Request, res: Response) => {
        try {
            const { name, description } = req.body;
            if (!name || !description) {
                res.status(400).json({ message: 'Please enter the area information' });
                return;
            }

            await AreasModel.createArea(req.body);
            res.status(201).json({ message: 'Area created correctly!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error creating this area' });
        }
    },

    // Función para ACTUALIZAR un area
    updateArea: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const { name, description } = req.body;
            if (!name || !description) {
                res.status(400).json({ message: 'Please enter all area information' });
                return;
            }

            await AreasModel.updateArea(id, req.body);
            res.status(200).json({ message: 'area up to date!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error while Updating the area' });
        }
    },

    // Función para ELIMINAR area
    deleteArea: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await AreasModel.deleteArea(id);
            res.status(200).json({ message: 'area successfully deleted' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error deleting the Area: ' + error });
        }
    },
};

export default AreasController;