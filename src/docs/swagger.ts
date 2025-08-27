import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Teaching Load API',
      version: '1.0.0',
      description: 'REST API for teaching load management',
    },
    servers: [
      { url: 'http://localhost:5000', description: 'Local' },
    ],
  },
  // Globs with JSDoc annotations (add more files as you grow)
  apis: ['src/routes/**/*.ts', 'src/server.ts'],
});