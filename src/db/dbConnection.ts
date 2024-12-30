import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config()

const url = process.env.DB_CONFIG_URL || ''

mongoose.connect(url)
    .then(() => {
        console.log('Connected to the DB');
    })
    .catch((e: Error) => {
        console.log('Error:', e);
    });