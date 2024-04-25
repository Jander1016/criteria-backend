import connectionPrisma from "../database/PrismaConnection";

const ResultsModel = {
  getAllResults: async () => {
    const results = await connectionPrisma.results.findMany();
    return results;
  },
  getResultById: async (id:string) => {
    const result = await connectionPrisma.results.findUnique({
      where: {
        id: id
      },
    });
    return result;
  },
  createResults: async (body:any) => {
    const result = await connectionPrisma.results.create({
      data: body
    });
    return result;
  },
  updateResults: async (id:string, body:any) => {
    const result = await connectionPrisma.results.update({
      where: {
        id: id
      },
      data: body
    });
    return result;
  }
}

export default ResultsModel;