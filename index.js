import * as dotenv from 'dotenv' ; 
import express from "express";
import { sequelize } from './config/database.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 8000; 

app.listen(port, ()=>{
    console.log('app start on port' + port);
});

try {
    await sequelize.authenticate();
    console.log('Database connection succesfull!');
} catch (error) {
    console.log(error)
}

