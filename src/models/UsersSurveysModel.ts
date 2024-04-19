import connectionPrisma from "../database/PrismaConnection";

const UsersSurveysModel = {

    //obtiene TODAS las 
    getAllUsersSurveys: async () => {
        const result = connectionPrisma.users_surveys.findMany();
        return result;
    },

    //obtiene  por  ID
    getUserSurvey: async (userid: string, surveyid: string) => {

        const result = connectionPrisma.users_surveys.findMany({
            where: {
                OR: [
                    { user_id: userid },
                    { survey_id: surveyid },
                  ]
            },
          });
        return result;
    },

    //CREA un nueva 
    createUserSurvey: async (body: any) => {
        const result = connectionPrisma.users_surveys.create({
                data: body,
            });
        return result;
    },

    //ELIMINADOR LOGICO 
    deleteLogicUserSurvey:  async (userid: string, surveyid: string) => {
        const result = connectionPrisma.users_surveys.update({
            where: {
                user_id_survey_id: {
                    user_id: userid,
                    survey_id: surveyid
                }
            },
            data: {
                active: false // Cambiar el valor de active a false
            }
        });
        return result;
    },
};

export default UsersSurveysModel;