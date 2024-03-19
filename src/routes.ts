import { Router } from "express";
import { SubjectController } from "./controllers/subject_controller";
import { RoomController } from "./controllers/room.controller";
import { APiError, BadRequestError } from "./helpers/api-error";
import { UserController } from "./controllers/user.controller";

const routes = Router();

routes.post('/user', new UserController().create);

routes.post('/subject', new SubjectController().create);

routes.post('/room', new RoomController().create);
routes.get('/room', new RoomController().list);
routes.post('/room/:idRoom/create', new RoomController().createVideo);
routes.post('/room/:idRoom/subject', new RoomController().roomSubject);

export default routes;