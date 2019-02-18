import * as express from 'express'
import { userRoutes } from "./routes/userRoutes";
import { companyRoutes } from './routes/companyRoutes';
import { questionRoutes } from './routes/questionRoutes';
import { AuthenticateService } from './helper/authenticateService';
import { UserController } from './controllers/userController';
import { testRoutes } from './routes/testRoutes';


const userController = new UserController();


export function configRoutes(app: express.Application){

    app.post('/user/signup', userController.signup);
    app.post('/user/login', userController.login);

    app.post('/user', [AuthenticateService.authenticate], userRoutes);
    app.use('/company', [AuthenticateService.authenticate], companyRoutes);
    app.use('/question', [AuthenticateService.authenticate], questionRoutes);
    app.use('/test',[AuthenticateService.authenticate], testRoutes);
}