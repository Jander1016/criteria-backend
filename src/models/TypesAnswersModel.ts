import connectionPrisma from "../database/PrismaConnection";

const TypesAnswerModel = {

    //obtiene TODOS los TypeAnswers
    getAllTypesAnswers: async () => {
        const result = connectionPrisma.types_answers.findMany();
        return result;
    },

    //obtiene TypeAnswer por  ID
    getTypeAnswer: async (id: string) => {
        const result = connectionPrisma.types_answers.findUnique({
            where: {
              id: id,
            },
          });
        return result;
    },

    //CREA un nuevo TypeAnswer
    createTypeAnswer: async (body: any) => {
        const result = connectionPrisma.types_answers.create({
                data: body,
            });
        return result;
    },

    //ACTUALIZA los datos de un TypeAnswer 
    updateTypeAnswer: async (id: string, body: any) => {
        const result = connectionPrisma.types_answers.update({
            where: { id: id },
            data: body,
        });
        return result;
    },

    //ELIMINA TypeAnswer
    deleteTypeAnswer: async (id: string) => {
        const result = connectionPrisma.types_answers.delete({
            where: { id: id },
        });
        return result;
    },

    //ELIMINADOR LOGICO TypeAnswer
    deleteLogicTypeAnswer:  async (id: string) => {
        const result = connectionPrisma.types_answers.update({
            where: { id: id },
            data: {
                active: false // Cambiar el valor de active a false
            }
        });
        return result;
    },
};

export default TypesAnswerModel;