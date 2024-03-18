// import { Subject } from "typeorm/persistence/Subject";
import { AppDataSource } from "../data-source";
import { Subject } from "../entities/subject";

export const sujectRepository = AppDataSource.getRepository(Subject); 