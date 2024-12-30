import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import './db/dbConnection';
import { validateAPIKey } from './middleware/validateAPIKey';
import { authRouter, tasksRouter } from './routers';
import { swaggerOptions } from './swagger/swaggerOptions';

dotenv.config()

const port = process.env.PORT || '3010';
const app = express();

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(cors())
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(validateAPIKey);

app.use('/api/auth/', authRouter);
app.use('/api/tasks/', tasksRouter);

app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);
