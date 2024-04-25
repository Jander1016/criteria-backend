import connectionPrisma from "../database/PrismaConnection";

const QuestionsModel = {
  getAllQuestions: async () => {
    const questions = await connectionPrisma.questions.findMany();
    return questions;
  },
  getQuestionById: async (id:string) => {
    const question = await connectionPrisma.questions.findUnique({
      where: {
        id: id
      },
    });
    return question;
  },
  createQuestions: async (body:any) => {
    const question = await connectionPrisma.questions.create({
      data: body
    });
    return question;
  },
  updateQuestions: async (id:string, body:any) => {
    const question = await connectionPrisma.questions.update({
      where: {
        id: id
      },
      data: body
    });
    return question;
  }
}

export default QuestionsModel;