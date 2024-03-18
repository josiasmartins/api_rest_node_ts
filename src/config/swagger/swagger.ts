import swaggerAutogen from 'swagger-autogen';
import path from 'path';

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

swaggerAutogen({openapi: '3.0.0', doc: doc})(outputFile, endpointsFiles, doc).then(() => {
    console.log('Arquivo swagger_output.json gerado com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao gerar arquivo swagger_output.json:', error);
  });