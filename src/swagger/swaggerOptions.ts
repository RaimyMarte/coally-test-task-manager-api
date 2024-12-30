import dotenv from 'dotenv';
import { SwaggerOptions } from 'swagger-ui-express';
dotenv.config()

const port = process.env.PORT || '3010';
const apiUrl = process.env.API_URL || `http://localhost:${port}`;

export const swaggerOptions: SwaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Tareas',
            version: '1.0.0',
            description: 'Documentación de la API de tareas',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
                apiKeyAuth: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'ApiKey',
                    description: 'Proporciona tu API key para autenticarte',
                },
            },
        },
        security: [
            {
                apiKeyAuth: [],
                bearerAuth: [],
            },
        ],
        servers: [
            {
                url: apiUrl,
            },
        ],
    },
    apis: ['./src/docs/*.swagger.js'],
};