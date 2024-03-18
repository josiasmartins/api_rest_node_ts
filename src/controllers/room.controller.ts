import { Request, Response } from "express";
import { roomRepository } from "../repositories/room.repository";
import { videoRepository } from "../repositories/video.repository";
import { sujectRepository } from "../repositories/subject_repository";

export class RoomController {

    addTagsSwagger() {
        return `
        /*
        #swagger.tags = ['Subject']
        #swagger.summary = 'Create a new user'
        #swagger.description = 'This endpoint will create a new user...'
    */
        `
    }

    async create(req: Request, res: Response) {
        /*
            #swagger.tags = ['Room']
            #swagger.summary = 'Create a new user'
            #swagger.description = 'This endpoint will create a new user...'
        */
        const { name, description } = req.body;

        try {
            const newRoom = roomRepository.create({ name, description });
            await roomRepository.save(newRoom);

            return res.status(201).json(newRoom);
        } catch (error) {
            console.log(error);

            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

    async createVideo(req: Request, res: Response) {

        /*
            #swagger.tags = ['Room']
            #swagger.summary = 'Create a new user'
            #swagger.description = 'This endpoint will create a new user...'
        */

        const { title, url } = req.body;
        const { idRoom } = req.params;

        try {
            const room = await roomRepository.findOneBy({ id: Number(idRoom) });

            if (!room) {
                return res.status(404).json({ message: 'Aula não existe' })
            }

            const newVideo = videoRepository.create({
                title,
                url,
                room
            });

            await videoRepository.save(newVideo);
            return res.status(201).json(newVideo);

        } catch (error) {
            console.log(error);

            return res.status(500).json({ message: "Internal Server Error" })
        }
    }


    async roomSubject(req: Request, res: Response) {

        /*
            #swagger.tags = ['Room']
            #swagger.summary = 'Create a new user'
            #swagger.description = 'This endpoint will create a new user...'
        */

        const { subject_id } = req.body;
        const { idRoom } = req.params;

        try {

            const room = await roomRepository.findOneBy({ id: Number(idRoom) });

            if (!room) {
                return res.status(404).json({ message: "Aula não encontrado" });
            }

            const subject = await sujectRepository.findOneBy({ id: Number(subject_id) });

            if (!subject) {
                return res.status(404).json({ message: "Disciplina não existe" });
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

        } catch (error) {
            console.log(error);

            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

    async list(req: Request, res: Response) {

        /*
            #swagger.tags = ['Room']
            #swagger.summary = 'Create a new user'
            #swagger.description = 'This endpoint will create a new user...'
        */

        try {
            const rooms = await roomRepository.find({
                relations: { // adiciona somente os relacionamentos desejados
                    subjects: true,
                    videos: true
                }
            });

            return res.status(200).json(rooms);

        } catch (error) {
            console.log(error);

            return res.status(500).json({ message: "Internal Server Error" })
        }

    }

}