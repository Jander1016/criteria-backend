import { hash, compare } from "bcrypt";

//funcion de ENCRIPTADO
async function encrypt(password: string) {
    const passwordHash = await hash(password, 8);
    return passwordHash;
}
 
//Funcion de VERIFICADO
async function verify (password: string, passwordHash: string) {
    const isValid = await compare(password, passwordHash);
    return isValid;
}

export { encrypt, verify };