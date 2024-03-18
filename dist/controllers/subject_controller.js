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
exports.SubjectController = void 0;
const subject_repository_1 = require("../repositories/subject_repository");
const api_error_1 = require("../helpers/api-error");
class SubjectController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
                #swagger.tags = ['Subject']
                #swagger.summary = 'Create a new user'
                #swagger.description = 'This endpoint will create a new user...'
            */
            const { name } = req.body;
            if (!name) {
                throw new api_error_1.BadRequestError("O nome é obrigatorio");
            }
            const newSubject = subject_repository_1.sujectRepository.create({ name });
            yield subject_repository_1.sujectRepository.save(newSubject);
            return res.status(201).json(newSubject);
            // return res.json("cheguei no controlador de criar disciplina");
        });
    }
}
exports.SubjectController = SubjectController;
