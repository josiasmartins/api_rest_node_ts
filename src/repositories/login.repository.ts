import { AppDataSource } from "../config/db/data-source";
import { Login } from "../entities/login";

export const loginRepository = AppDataSource.getRepository(Login);