import { Router } from 'express'
import {CompanyController} from './../controllers/companyController'

export const companyRoutes : Router = Router();

const companyController = new CompanyController();

companyRoutes.post('/signup', companyController.signup);
companyRoutes.post('/login', companyController.login);