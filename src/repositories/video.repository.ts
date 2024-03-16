import { AppDataSource } from "../data-source";
import { Room } from "../entities/room";
import { Video } from "../entities/video";

export const videoRepository = AppDataSource.getRepository(Video);