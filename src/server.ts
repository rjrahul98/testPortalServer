const express = require('express')
const bodyParser = require('body-parser')
import {Db} from './DB'
import { configRoutes } from './routes';


export const app = express();
const dbClient = new Db();
dbClient.connectMongooseServer();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

configRoutes(app);

let port : number = 4000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})
