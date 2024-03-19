import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { BadRequestError } from '../helpers/api-error';
import { userRepository } from '../repositories/userRepository';

 
export class LoginController {

    async create(req: Request, res: Response) {
        const { email, password } = req.body;

        const user = await userRepository.findOneBy({ email });

        if (!user) {
            throw new BadRequestError("E-mail ou senha inválidos");
        }

        const verifyPass = await bcrypt.compare(password, user.password); // compara a senha sem cryptografia com a senha cryptografada no banco

        if (!verifyPass) {
            throw new BadRequestError("E-mail ou senha inválidos");
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', { expiresIn: '8h' }) // cria a assinatura

        console.log(token);

        const { password: _, ...userLogin } = user;

        console.log(userLogin, password);

        return res.status(200).json({
            user: userLogin,
            token: token
        });
    }

    async getProfile(req: Request, res: Response) {

        // return res.status(200).json(loggedUser);

        return res.status(200).json(req.user);
    }

}