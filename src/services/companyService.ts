import {DbModel} from './../dbModels/dbModel'
import {ResponseService} from  './../helper/responseService'
import { userInfo } from 'os';
const passwordHash = require('password-hash')
const jwt = require('jsonwebtoken')


export class CompanyService{
    public static async signup(req : any){
        try{
            let newCompany = DbModel.CompanyModel(req.body);
            let hashedPassword = await passwordHash.generate(req.body['password']);
            newCompany.password = hashedPassword;
            await newCompany.save();
            return ResponseService.getValidResponse(newCompany);
        }
        catch(err){
            return ResponseService.getInValidResponse(err);
        }
    }

    public static async login(req: any){
        try{
            let company = await DbModel.CompanyModel.findOne({ 'CompanyEmail': req.body['CompanyEmail']}).exec();
            if(company){
                let isLoggedIn = await passwordHash.verify(req.body['password'], company.password);
                if(isLoggedIn){
                    let token = jwt.sign({'CompanyEmail' : company.CompanyEmail}, 'testPortal');
                    return ResponseService.getValidResponse({'token' : token});
                }else{ return ResponseService.getInValidResponse('wrong email or password')}
            }else{ return ResponseService.getInValidResponse('company not registered')}
        }
        catch(err){
            return ResponseService.getInValidResponse(err);
        }
    }
}