"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const doc = {
    info: {
        version: 'v1.0.0',
        title: 'Api Rest typescript',
        description: 'Api Rest typescript'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: ''
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            }
        }
    }
};
const outputFile = './swagger_output.json';
// const outputFile = path.join(__dirname, '..', 'swagger_output.json');
const endpointsFiles = ['../../routes.ts'];
(0, swagger_autogen_1.default)({ openapi: '3.0.0', doc: doc })(outputFile, endpointsFiles, doc).then(() => {
    console.log('Arquivo swagger_output.json gerado com sucesso!');
})
    .catch((error) => {
    console.error('Erro ao gerar arquivo swagger_output.json:', error);
});
