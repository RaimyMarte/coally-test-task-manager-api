const port = process.env.PORT || 3010;
const apiUrl = process.env.API_URL || `http://localhost:${port}`;

const swaggerOptions = {
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
            },
        },
        security: [
            {
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

module.exports = swaggerOptions;