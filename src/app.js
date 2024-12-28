const cors = require('cors')
const express = require("express");
const authRouter = require('./routers/auth')
const taskRouter = require('./routers/task')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger/swaggerOptions');
const validateAPIKey = require('./middleware/validateAPIKey');

require('dotenv').config()

require('./db/dbConnection')

const port = process.env.PORT || 3010;
const app = express();

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(cors())
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(validateAPIKey);

app.use('/api/auth/', authRouter);
app.use('/api/tasks/', taskRouter);

app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);
