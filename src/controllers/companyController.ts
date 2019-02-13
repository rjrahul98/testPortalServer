import {CompanyService} from './../services/companyService'
import {Request, Response} from 'express'

export class CompanyController{

    public async signup(req: Request, res : Response){
        let newCompany = await CompanyService.signup(req);
        return res.json(newCompany);
    }

    public async login(req: Request, res : Response){
        let registeredCompany = await CompanyService.login(req);
        res.json(registeredCompany);
    }
}