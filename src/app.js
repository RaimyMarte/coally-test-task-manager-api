const cors = require('cors')
const express = require("express");
const authRouter = require('./routers/auth')
const taskRouter = require('./routers/task')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger/swaggerOptions');

require('dotenv').config()

require('./db/dbConnection')

const PORT = process.env.PORT || 3010;
const app = express();

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(cors())
app.use(express.json());

// Usar swagger-ui para mostrar la documentación
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use('/api/auth/', authRouter);
app.use('/api/tasks/', taskRouter);

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
