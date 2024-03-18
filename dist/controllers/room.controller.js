"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomController = void 0;
const room_repository_1 = require("../repositories/room.repository");
const video_repository_1 = require("../repositories/video.repository");
const subject_repository_1 = require("../repositories/subject_repository");
const api_error_1 = require("../helpers/api-error");
class RoomController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
                #swagger.tags = ['Room']
                #swagger.summary = 'Create a new user'
                #swagger.description = 'This endpoint will create a new user...'
            */
            const { name, description } = req.body;
            const newRoom = room_repository_1.roomRepository.create({ name, description });
            yield room_repository_1.roomRepository.save(newRoom);
            return res.status(201).json(newRoom);
        });
    }
    createVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
                #swagger.tags = ['Room']
                #swagger.summary = 'Create a new user'
                #swagger.description = 'This endpoint will create a new user...'
            */
            const { title, url } = req.body;
            const { idRoom } = req.params;
            const room = yield room_repository_1.roomRepository.findOneBy({ id: Number(idRoom) });
            if (!room) {
                throw new api_error_1.BadRequestError('Aula não existe');
            }
            const newVideo = video_repository_1.videoRepository.create({
                title,
                url,
                room
            });
            yield video_repository_1.videoRepository.save(newVideo);
            return res.status(201).json(newVideo);
        });
    }
    roomSubject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
                #swagger.tags = ['Room']
                #swagger.summary = 'Create a new user'
                #swagger.description = 'This endpoint will create a new user...'
            */
            const { subject_id } = req.body;
            const { idRoom } = req.params;
            const room = yield room_repository_1.roomRepository.findOneBy({ id: Number(idRoom) });
            if (!room) {
                throw new api_error_1.BadRequestError("Aula não encontrado");
            }
            const subject = yield subject_repository_1.sujectRepository.findOneBy({ id: Number(subject_id) });
            if (!subject) {
                throw new api_error_1.BadRequestError("Disciplina não existe");
            }
            const roomUpdate = Object.assign(Object.assign({}, room), { subjects: [subject] });
            yield room_repository_1.roomRepository.save(roomUpdate);
            // await roomRepository.update(idRoom, {
            //     ...room,
            //     subjects: [subject]
            // });
            return res.status(204).send();
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
                #swagger.tags = ['Room']
                #swagger.summary = 'Create a new user'
                #swagger.description = 'This endpoint will create a new user...'
            */
            const rooms = yield room_repository_1.roomRepository.find({
                relations: {
                    subjects: true,
                    videos: true
                }
            });
            return res.status(200).json(rooms);
        });
    }
}
exports.RoomController = RoomController;
