import { config } from 'dotenv';
config({ path: '../../.env' })

import mongoose  from "mongoose";
import { DB_NAME } from "../constant.js";


export const dbConnect=async()=>{
      try {
        const request= await mongoose.connect(`mongodb+srv://vyshakn:PPiEj4iKfGZs7Eh@cluster0.xdhu0mh.mongodb.net/${DB_NAME} `);
        console.log('Connected to Db successfully')
      } catch (error) {
        console.log('Connection to Db is failed',error);
        throw error
      }
}