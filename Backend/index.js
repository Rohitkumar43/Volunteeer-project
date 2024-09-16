import express from  'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbconnection } from './Database/dbconnect';

const app = express();
dotenv.config({path: './config.env'});

app.use(cors({
    origin: FRONTED_URL,
    method: ['POST'],
    Credential: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
dbconnection();

export default app