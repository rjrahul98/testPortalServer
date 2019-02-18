import {Router} from 'express'
import { UserController } from './../controllers/userController'


export const userRoutes : Router = Router();

const userController = new UserController();

