import { config } from 'dotenv';
config({ path: '../../.env' })

import { dbConnect } from './db/index.js';
import express from "express";

const app=express();


dbConnect()
.then(()=> {
    app.listen(process.env.PORT,()=>{
        console.log('app is listening on port 800')
    })
})
.catch((error)=>{
    console.log('Connection to the server is failed',error);
    process.exit(1);
});