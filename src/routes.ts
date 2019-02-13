import * as express from 'express'
import { userRoutes } from "./routes/userRoutes";
import { companyRoutes } from './routes/companyRoutes';


export function configRoutes(app: express.Application){

    app.use('/user', userRoutes);
    app.use('/company', companyRoutes);
}