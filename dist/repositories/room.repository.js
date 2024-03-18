"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomRepository = void 0;
const data_source_1 = require("../config/db/data-source");
const room_1 = require("../entities/room");
exports.roomRepository = data_source_1.AppDataSource.getRepository(room_1.Room);
