"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sujectRepository = void 0;
// import { Subject } from "typeorm/persistence/Subject";
const data_source_1 = require("../config/db/data-source");
const subject_1 = require("../entities/subject");
exports.sujectRepository = data_source_1.AppDataSource.getRepository(subject_1.Subject);
