import {Request, Response, NextFunction} from "express";
import {verifyToken} from "../utils/jwtHandler";
import connectionPrisma from "../database/PrismaConnection";

type JwtPayload = {
    id: String;
    iat: number;
    exp: number;
}

// Verifica que es un evaluador como encuestador
export async function isEvaluator(req : Request, res : Response, next : NextFunction) {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser
            .split(" ") 
            .pop() || "";

        const jwtPayload = await verifyToken(jwt)as JwtPayload;
        console.log("The TOKEN: " + jwtByUser);
        
        if (!jwtPayload) { 
            res.status(401);
            res.send("This Json Web Token is invalid.");
        }

        const payloadId: string = jwtPayload.id.toString();
        const results : any = await connectionPrisma.users.findUnique({
            where: {
              id: payloadId,
            },
          });
        console.log("Result: " + JSON.stringify(results));

        if (!results) {
            console.log("User Not Found.");
        }
        const user = results; 
        console.log("User Not Found: " + JSON.stringify(user));

        if (!user.role) { 
            console.log("Permissions are invalid");
            res.status(401).json({ message: 'Permissions are invalid' });
            return;
        }

        next();
        return jwtPayload;
    } catch (e) {
        res.status(400).json({ message: 'Error: ' + e });
    }
}