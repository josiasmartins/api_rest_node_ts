import { Request, Response } from "express";
import { roomRepository } from "../repositories/room.repository";
import { videoRepository } from "../repositories/video.repository";
import { sujectRepository } from "../repositories/subject_repository";
import { BadRequestError, NotFoundError } from "../helpers/api-error";

export class RoomController {

    async create(req: Request, res: Response) {
        /*
            #swagger.tags = ['Room']
            #swagger.summary = 'Create a new user'
            #swagger.description = 'This endpoint will create a new user...'
        */
        const { name, description } = req.body;

        const newRoom = roomRepository.create({ name, description });
        await roomRepository.save(newRoom);

        return res.status(201).json(newRoom);
    }

    async createVideo(req: Request, res: Response) {

        /*
            #swagger.tags = ['Room']
            #swagger.summary = 'Create a new user'
            #swagger.description = 'This endpoint will create a new user...'
        */

        const { title, url } = req.body;
        const { idRoom } = req.params;

        const room = await roomRepository.findOneBy({ id: Number(idRoom) });

        if (!room) {
            throw new BadRequestError('Aula não existe');
        }

        const newVideo = videoRepository.create({
            title,
            url,
            room
        });

        await videoRepository.save(newVideo);
        return res.status(201).json(newVideo);
    }


    async roomSubject(req: Request, res: Response) {

        /*
            #swagger.tags = ['Room']
            #swagger.summary = 'Create a new user'
            #swagger.description = 'This endpoint will create a new user...'
        */

        const { subject_id } = req.body;
        const { idRoom } = req.params;

        const room = await roomRepository.findOneBy({ id: Number(idRoom) });

            if (!room) {
                throw new BadRequestError("Aula não encontrado");
            }

            const subject = await sujectRepository.findOneBy({ id: Number(subject_id) });

            if (!subject) {
                throw new BadRequestError("Disciplina não existe");
            }

            const roomUpdate = {
                ...room,
                subjects: [subject]
            };

            await roomRepository.save(roomUpdate);

            // await roomRepository.update(idRoom, {
            //     ...room,
            //     subjects: [subject]
            // });

            return res.status(204).send();
     
    }

    async list(req: Request, res: Response) {

        /*
            #swagger.tags = ['Room']
            #swagger.summary = 'Create a new user'
            #swagger.description = 'This endpoint will create a new user...'
        */

            const rooms = await roomRepository.find({
                relations: { // adiciona somente os relacionamentos desejados
                    subjects: true,
                    videos: true
                }
            });

            return res.status(200).json(rooms);

    }

}