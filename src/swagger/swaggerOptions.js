const PORT = process.env.PORT || 3010;

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Tareas',
            version: '1.0.0',
            description: 'Documentación de la API de tareas',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./src/docs/*.swagger.js'],
};

module.exports = swaggerOptions;