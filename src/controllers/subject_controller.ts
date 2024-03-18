import { Response, Request } from "express";
import { sujectRepository } from "../repositories/subject_repository";

export class SubjectController {

    
    async create(req: Request, res: Response) {
        /*
            #swagger.tags = ['Subject']
            #swagger.summary = 'Create a new user'
            #swagger.description = 'This endpoint will create a new user...'
        */
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: "O nome é obrigatório" })
        }

        try {
            const newSubject = sujectRepository.create({ name });

            await sujectRepository.save(newSubject);
            
            return res.status(201).json(newSubject);
        } catch (error) {
            console.log(error);
            return res.json({ message: "Internal Server error" })
        }

        // return res.json("cheguei no controlador de criar disciplina");
    }

}