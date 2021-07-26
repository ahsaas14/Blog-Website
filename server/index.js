import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

//IMport Components

import Connection from './database/db.js';

import { Router } from 'express';



const app = express();
app.use('/', Router)
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));


//console.log('server running')

const PORT=8000

app.listen(PORT, ()=>console.log('port 8000 running'))

//Router.post('/create', ()=>{
    //save to mongodb
//})

Connection();