import { Response, Request } from "express";

export class SubjectController {

    async create(req: Request, res: Response) {
        // criacao
        return res.json("cheguei no controlador de criar disciplina");
    }

}