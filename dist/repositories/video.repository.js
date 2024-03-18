"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoRepository = void 0;
const data_source_1 = require("../config/db/data-source");
const video_1 = require("../entities/video");
exports.videoRepository = data_source_1.AppDataSource.getRepository(video_1.Video);
