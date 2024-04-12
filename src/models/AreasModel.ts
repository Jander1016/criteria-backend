import connectionPrisma from "../database/PrismaConnection";

const AreasModel = {

    //obtiene TODOS los departamentos
    getAllAreas: async () => {
        const result = connectionPrisma.areas.findMany();
        return result;
    },

    //obtiene departamento por  ID
    getArea: async (id: string) => {
        const result = connectionPrisma.areas.findUnique({
            where: {
              id: id,
            },
          });
        return result;
    },

    //CREA un nuevo departamento
    createArea: async (body: any) => {
        const result = connectionPrisma.areas.create({
                data: body,
            });
        return result;
    },

    //ACTUALIZA los datos de un departamento 
    updateArea: async (id: string, body: any) => {
        const result = connectionPrisma.areas.update({
            where: { id: id },
            data: body,
        });
        return result;
    },

    //ELIMINA departamento
    deleteArea: async (id: string) => {
        const result = connectionPrisma.areas.delete({
            where: { id: id },
        });
        return result;
    },
};

export default AreasModel;