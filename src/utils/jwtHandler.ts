import { sign, verify } from "jsonwebtoken";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '';

//Funcion del token
export async function generateToken(id: string) {
    const jwt = sign({id}, JWT_SECRET_KEY, {
        expiresIn: "1h", 
    });
    return jwt;
}

//VERIFICA el token
export async function verifyToken(jwt: string) {
    try {
        const isValid = verify(jwt, JWT_SECRET_KEY);
        return isValid; 
    } catch (error) {
        console.error("JWT Verification Failed: ", error);
        return false;
    }
}