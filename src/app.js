const cors = require('cors')
const express = require("express");
const authRouter = require('./routers/auth')
const taskRouter = require('./routers/task')

require('dotenv').config()

require('./db/dbConnection')

const PORT = process.env.PORT || 3050;

const app = express();

app.use(cors())
app.use(express.json());

app.use('/api', authRouter); 
app.use('/api', taskRouter);

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
