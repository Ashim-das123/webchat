import express from 'express';    //const express = require('express')
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Route from './routes/route.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT_NO;


const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Route);


Connection();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`))