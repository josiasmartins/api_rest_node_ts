import { Router } from "express";
import { SubjectController } from "./controllers/subject_controller";
import { RoomController } from "./controllers/room.controller";
import { VideoController } from "./controllers/video.controller";

const routes = Router();

routes.post('/subject', new SubjectController().create);
routes.post('/room', new RoomController().create);
routes.post('/room/:idRoom/create', new VideoController().createVideo);

export default routes;