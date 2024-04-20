import connectionPrisma from "../database/PrismaConnection";

const DepartmentsModel = {

    //obtiene TODOS los departamentos
    getAllDepartments: async () => {
        const result = connectionPrisma.departments.findMany();
        return result;
    },

    //obtiene departamento por  ID
    getDepartment: async (id: string) => {
        const result = connectionPrisma.departments.findUnique({
            where: {
              id: id,
            },
          });
        return result;
    },

    //CREA un nuevo departamento
    createDepartment: async (body: any) => {
        const result = connectionPrisma.departments.create({
                data: body,
            });
        return result;
    },

    //ACTUALIZA los datos de un departamento 
    updateDepartment: async (id: string, body: any) => {
        const result = connectionPrisma.departments.update({
            where: { id: id },
            data: body,
        });
        return result;
    },

    //ELIMINA departamento
    deleteDepartment: async (id: string) => {
        const result = connectionPrisma.departments.delete({
            where: { id: id },
        });
        return result;
    },

    //ELIMINADOR LOGICO departamento
    deleteLogicDepartment:  async (id: string) => {
        const result = connectionPrisma.departments.update({
            where: { id: id },
            data: {
                active: false // Cambiar el valor de active a false
            }
        });
        return result;
    },
};

export default DepartmentsModel;