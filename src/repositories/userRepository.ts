import { AppDataSource } from "../config/db/data-source";
import { User } from "../entities/user";

export const userRepository = AppDataSource.getRepository(User);