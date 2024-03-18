"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subject_controller_1 = require("./controllers/subject_controller");
const room_controller_1 = require("./controllers/room.controller");
const api_error_1 = require("./helpers/api-error");
const routes = (0, express_1.Router)();
routes.get('/', (req, res) => {
    throw new api_error_1.BadRequestError('Erro lançado do ApiError');
});
routes.post('/subject', new subject_controller_1.SubjectController().create);
routes.post('/room', new room_controller_1.RoomController().create);
routes.get('/room', new room_controller_1.RoomController().list);
routes.post('/room/:idRoom/create', new room_controller_1.RoomController().createVideo);
routes.post('/room/:idRoom/subject', new room_controller_1.RoomController().roomSubject);
exports.default = routes;
