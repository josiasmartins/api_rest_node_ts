import { NextFunction, Response, Request } from "express";
import { userRepository } from "../repositories/userRepository";
import { UnauthorizedError } from "../helpers/api-error";
import jwt from "jsonwebtoken";

type JwtPayload = {
    id: number
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const { authorization } = req.headers;

    if (!authorization) {
        throw new UnauthorizedError("Não authorizado");
    }

    console.log(authorization);

    const token = authorization.split(" ")[1];

    console.log(token);

    const { id } = jwt.verify(token, process.env.JWT_PASS ?? "") as JwtPayload;

    const user = await userRepository.findOneBy({ id });

    if (!user) {
        throw new UnauthorizedError("Não autorizado");
    }

    const { password: _, ...loggedUser } = user;

    req.user = loggedUser;

    next()

}