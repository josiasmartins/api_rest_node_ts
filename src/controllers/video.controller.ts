import { Request, Response } from "express";
import { roomRepository } from "../repositories/room.repository";

export class VideoController {

    async createVideo(req: Request, res: Response) {
        const { title, url } = req.body;
        const { idAula } = req.params;

        try {
            
        } catch (error) {
            console.log(error);

            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

}