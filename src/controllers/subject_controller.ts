import { Response, Request } from "express";
import { sujectRepository } from "../repositories/subject_repository";
import { BadRequestError } from "../helpers/api-error";

export class SubjectController {

    
    async create(req: Request, res: Response) {
        /*
            #swagger.tags = ['Subject']
            #swagger.summary = 'Create a new user'
            #swagger.description = 'This endpoint will create a new user...'
        */
        const { name } = req.body;

        if (!name) {
            throw new BadRequestError("O nome é obrigatorio")
        }

        const newSubject = sujectRepository.create({ name });

        await sujectRepository.save(newSubject);
        
        return res.status(201).json(newSubject);

        // return res.json("cheguei no controlador de criar disciplina");
    }

}