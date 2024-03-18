import { Request, Response } from "express";
import { roomRepository } from "../repositories/room.repository";
import { videoRepository } from "../repositories/video.repository";

export class VideoController {

    async createVideo(req: Request, res: Response) {
        const { title, url } = req.body;
        const { idAula } = req.params;

        try {

            // const room = await roomRepository.findOneBy({ id: Number(idRoom) });

            // if (!room) {
            //     return res.status(404).json({ message: "Aula não encontrada" });
            // }

            // const newVideo = videoRepository.create({
            //     title,
            //     url,
            //     room
            // });

            // await videoRepository.save(newVideo);
            
        } catch (error) {
            console.log(error);

            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

}