import * as express from 'express'
import { userRoutes } from "./routes/userRoutes";
import { companyRoutes } from './routes/companyRoutes';
import { questionRoutes } from './routes/questionRoutes';


export function configRoutes(app: express.Application){

    app.use('/user', userRoutes);
    app.use('/company', companyRoutes);
    app.use('/question', questionRoutes);
}