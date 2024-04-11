import connectionPrisma from "../database/PrismaConnection";

const UsersModel = {

    //obtiene TODOS los usuarios de users
    getAllUsers: async () => {
        const result = connectionPrisma.users.findMany();
        return result;
    },

    //getUser obtener un usuario por  ID
    getUser: async (id: string) => {
        const result = connectionPrisma.users.findUnique({
            where: {
              id: id,
            },
          });
        return result;
    },

    //obtener un usuario por su username
    getUserByEmail: async (email: string) => {
        const result = connectionPrisma.users.findUnique({
            where: {
                email: email,
            },
          });
        return result;
    },    

    //CREA un nuevo usuario en BD 
    createUser: async (body: any) => {
        const result = connectionPrisma.users.create({
                data: body,
            });
        return result;
    },

    //ACTUALIZA los datos de usuario existente
    updateUser: async (id: string, body: any) => {
        const result = connectionPrisma.users.update({
            where: { id: id },
            data: body,
        });
        return result;
    },

    //ELIMINA usuario de la BD por ID y devuelve resultado de la operación de eliminación
    deleteUser: async (id: string) => {
        const result = connectionPrisma.users.delete({
            where: { id: id },
        });
        return result;
    },
};

export default UsersModel;