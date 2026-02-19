import swaggerJSDoc, { Options } from 'swagger-jsdoc';

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node REST API',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  // Update the file extensions to .ts for your development environment
  apis: ['./src/routes/*.ts', './src/app.ts'], 
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;