import connectionPrisma from "../database/PrismaConnection";

const TypesAnswerModel = {

    //obtiene TODOS los departamentos
    getAllTypesAnswers: async () => {
        const result = connectionPrisma.types_answers.findMany();
        return result;
    },

    //obtiene departamento por  ID
    getTypeAnswer: async (id: string) => {
        const result = connectionPrisma.types_answers.findUnique({
            where: {
              id: id,
            },
          });
        return result;
    },

    //CREA un nuevo departamento
    createTypeAnswer: async (body: any) => {
        const result = connectionPrisma.types_answers.create({
                data: body,
            });
        return result;
    },

    //ACTUALIZA los datos de un departamento 
    updateTypeAnswer: async (id: string, body: any) => {
        const result = connectionPrisma.types_answers.update({
            where: { id: id },
            data: body,
        });
        return result;
    },

    //ELIMINA departamento
    deleteTypeAnswer: async (id: string) => {
        const result = connectionPrisma.types_answers.delete({
            where: { id: id },
        });
        return result;
    },
};

export default TypesAnswerModel;