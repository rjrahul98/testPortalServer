import {DbModel} from './../dbModels/dbModel'
import {ResponseService} from './../helper/responseService'
const bcrypt = require('bcryptjs')
const passwordHash = require('password-hash')
const jwt = require('jsonwebtoken')



export class UserService{
    public static async signup(req : any){
        try{
            let user = DbModel.UserModel(req.body);
            let hashedPassword = passwordHash.generate(req.body['password']);
            user.password = hashedPassword;
            await user.save();
            return ResponseService.getValidResponse(user);

        }
        catch(err){
            return ResponseService.getInValidResponse(err);
        }
    }

    public static async login(req : any){
        try{
            let user = await DbModel.UserModel.findOne({'email' : req.body['email']}).exec();
            if(user){
                let isValidUser = await passwordHash.verify(req.body['password'], user.password);
                if(isValidUser){
                    let token = await jwt.sign({ 'email': user.email, 'id': user._id }, 'testPortal');
                    return ResponseService.getValidResponse({ 'token': token });
                }
                else { return ResponseService.getInValidResponse('email or password is incorrect') };
            }else{
                return ResponseService.getInValidResponse('user is not regisetred with us.')
            }
        }
        catch(err){
            return ResponseService.getInValidResponse(err);
        }
    }
}