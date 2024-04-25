import connectionPrisma from "../database/PrismaConnection";

const AnswersModel = {
  getAllAnswers: async () => {
    const answers = await connectionPrisma.answers.findMany();
    return answers;
  },
  getAnswerById: async (id:string) => {
    const answer = await connectionPrisma.answers.findUnique({
      where: {
        id: id
      },
    });
    return answer;
  },
  createAnswers: async (body:any) => {
    const answer = await connectionPrisma.answers.create({
      data: body
    });
    return answer;
  },
  updateAnswers: async (id:string, body:any) => {
    const answer = await connectionPrisma.answers.update({
      where: {
        id: id
      },
      data: body
    });
    return answer;
  }
}

export default AnswersModel;