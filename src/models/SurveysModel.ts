import connectionPrisma from "../database/PrismaConnection";

const SurveysModel = {

    //obtiene TODAS las encuesta
    getAllSurveys: async () => {
        const result = connectionPrisma.surveys.findMany();
        return result;
    },

    //obtiene encuesta por  ID
    getSurvey: async (id: string) => {
        const result = connectionPrisma.surveys.findUnique({
            where: {
              id: id,
            },
          });
        return result;
    },

    //CREA un nueva encuesta
    createSurvey: async (body: any) => {
        const result = connectionPrisma.surveys.create({
                data: body,
            });
        return result;
    },

    //ACTUALIZA los datos de una encuesta 
    updateSurvey: async (id: string, body: any) => {
        const result = connectionPrisma.surveys.update({
            where: { id: id },
            data: body,
        });
        return result;
    },

    //ELIMINA encuesta
    deleteSurvey: async (id: string) => {
        const result = connectionPrisma.surveys.delete({
            where: { id: id },
        });
        return result;
    },

    //ELIMINADOR LOGICO encuesta
    deleteLogicSurvey:  async (id: string) => {
        const result = connectionPrisma.surveys.update({
            where: { id: id },
            data: {
                active: false // Cambiar el valor de active a false
            }
        });
        return result;
    },
};

export default SurveysModel;